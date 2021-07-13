---
title: "What's the deal with Genshin Impact Wishes? (Part 1)"
details: 'A far too comprehensive guide to the pity system'
date: '2021-06-06'
---

## Let's talk Genshin, Gacha, and Statistics!


Genshin Impact is a free-to-play game developed by miHoYo in which players to use up to four characters to explore an open world and participate in its many activities. The primary method of acquiring new valuable characters and weapons is through "wishing". Wishing is a method in which you spend in-game currency to randomly acquire new items. This is similar to opening packs of cards, and is known as a <a href="https://en.wikipedia.org/wiki/Gacha_game" target="_blank">gacha system</a>. Like most gacha games, there are varying chances for acquiring items of different rarities. In Genshin, there are three rarities that you may summon for: 3-Star, 4-Star, and 5-Star; with 5-star being the most rare. 

![5 Star Hu Tao](my-Hu-Tao-summon-pog.png)

MiHoYo discloses the rates for acquiring an item of each rarity, but there's just one problem - there's an internal contradiction in the rates they suggest. Furthermore, the disclosed rates seem to defy most players' wishing experiences, which leads these gamers to resort to the dark arts of statistics. And that is what we will be doing here today.

## So where's the contradiction?

The details for the rates can be found here on the <a href="https://genshin-impact.fandom.com/wiki/Wishes" target="_blank">wiki</a>. Here's the idea:

Whenever you wish, you have a chance of getting a 3-Star, 4-Star, or 5-Star.

1. The chance for a 5-Star is 0.6%.
2. The chance for a 4-Star is 5.1%.
3. The chance for a 3-Star is 94.3%.

With just the above rules alone, repeated summons simply follow a binomial distribution. However, there is an additional 'pity' system which makes the summons no longer independent. In particular:

4. If you summon 9 times and do not recieve a 4-Star, you will recieve one on the 10th summon.
5. If you summon 89 times and do not recieve a 5-Star, you will recieve one on the 90th summon.
6. The count for the above conditions reset to 0 whenever you summon the respective rarity.

Because the wishes are no longer independent, the chance for the higher rarities become more obscure. A 'consolidated rate', or average rate including pity, seeks to clarify how many of each rarity you would expect with many summons. MiHoYo claims 

7. There is a 1.6% 5-Star consolidated rate (around 1.6% of your summons can be expected to be 5 stars)
8. There is a 13% consolidated rate for 4-Stars

But all these rules, taken together, cannot hold! They are invalid statistically speaking, because rules 1 through 6 contradict the values for rules of 7 and 8.

There are two ways of discussing this contradiction:

1. Analytically
2. Emperically, through simulations

Let's dive in!

## The Analytical Contradiction

The goal is to use rules 1-6 in order to calculate the consolidated rate. First, however, I'd like to present two much simpler questions, to provide insight into how we reach our calculation (maybe skip these if you're already a pro).

### Starting Simple
Consider if we roll a fair six sided dice. Each side has a 1/6 chance, and is labelled 1 through 6. What is the average number we would expect? Indeed, we may calculate the average of these numbers to find that this value is 3.5. 3.5 in this way represents the expected average of all the 'mapped' values (1-6) when rolling the dice many times. However, it's not always the case that the probabilities are equal, so what do we do then? The Expected value is the following:

$$
EX = \mu_x = \sum_{i=1}^{n} P(x_i)*x_i
$$

for our case above, $P(x_i)$ doesn't change, and remains at 1/6. $x_i$ would represent our mapping of 1 through 6. A table might look something like this:

| xi | P(xi) | P(xi)*xi |
| -- | ----- | -------- |
| 1  | 1/6   | 1*(1/6)  |
| 2  | 1/6   | 2*(1/6)  |
| 3  | 1/6   | 3*(1/6)  |
| 4  | 1/6   | 4*(1/6)  |
| 5  | 1/6   | 5*(1/6)  |
| 6  | 1/6   | 6*(1/6)  |

Summing that third column produces the expected value, and knowing how to do this will be helpful later on.

Another idea to keep in mind is how to deal with subsequent events. This is handled through multiplying each likelihood, and is often visualized with probability trees. This is fairly well known, and is introduced with things like the chance of getting three heads in a row, flipping three times: $(0.5)(0.5)(0.5) = (0.5)^3 = (0.125)$.

### Finally The Consolidated Rate, Maybe

The chance you get a 5 star on exactly your first pull is (0.006). Neat. The chance you get a 5 star on your second pull is (0.006)(1-0.006), because you failed the first time. The third pull is of course (0.006)(1-0.006)(1-0.006). We can generalize this pattern for n pulls:

$$
(0.006)(1-0.006)^{n-1}
$$

for n 1...89. For 90 pulls, you 'missed' 90 times, and so, the chance you REACH 90 pulls (NOT the chance you 'succeed' at 90, which is 100% from pity) is $(1-0.006)^{89}$

So now we have $x_i$=n, and a $P(x_i)$, and we may calculate our expected value to determine our expected value to acquire a single summon.

$$
\mu_x = \sum_{n=1}^{89} n 0.006(1-.006)^{n-1} + 90(1-.006)^{89} \approx 69.69
$$

A quick table, to again visualize this:

| xi  | P(xi)      | xi*P(xi)     |
| --- | ---------- | ------------ |
| 1   | $0.006$         | 1*(0.006)    |
| 2   | $0.006(.994)$   | 2*0.006(.994) |
| 3   | $0.006(.994)^2$ | 3*... |
| 4   | $0.006(.994)^3$ | 4*... |
| ... | ...             | ...   |
| 89  | $0.006(.994)^{88}$ | 89*...  |
| 90  | $(.994)^{89}$ | 90*...  |

The expected value is nicely ~69.69 wishes for a single five star unit, if we keep repeating this summon until a 5 star within 90 game. In this manner, we may expect a consolidated rate of approximately 1/69.69 = 0.01435, or 1.435%. This is certainly different from 1.6%! 

## The Emperical Contradiction

Even though we've calculated the consolidated rate, and discovered it was not 1.6%, but rather 1.435%, let's reproduce this with simulations (in python).

First, my imports:

```python
import numpy as np
import pandas as pd
import random
from collections import Counter
import scipy.stats
```
Next, I define a simple roll function:

```python

def roll(probMassFunc = [0.006, 0.051, 0.943], numRolls = 1):
  """
  Basic roll function. Samples a roll using numPy Cythonized random choice.
  """
  value = np.random.choice(3,numRolls,replace=True,p=probMassFunc)
  return value
```
If we try this roll function, we will get a value of 0 1 or 2, using their respecitve weights as given by the pmf.

```
outcome = roll()
outcome[0]
```
However, this sort of role doesn't implement pity. The next block of code is a lazy implementation which keeps track of your 4 and 5 stars with the global variable count4 and count5. Of course, when either reach the pity, the roll will accomidate.

```python
#A count of how many rolls since the last 4/5 star
count4 = 0
count5 = 0

def conditionalRoll():
  """
  INPUT: None
  OUTPUT: returns 0,1,2
  FUNCTIONALITY: A roll function checking conditionals. 4* every 10, and 5* every 90.
  """
  
  global count4
  global count5

  #Performing the conditional roll. If 5 star guaruntee, then 4 star, then regular roll.
  if(count5 == 89):
    outcome = [0]
  elif(count5 < 90 and count4 == 9):
    outcome = roll(probMassFunc = [0.006,0.994,0])
  else:
    outcome = roll()
    
  #Extracts value from np.array to int
  outcomeValue = outcome[0]

  #Checks if a 4 star was rolled and adjusts counter
  if(outcomeValue != 0):
    count5 = count5+1
  else:
    count5 = 0

  #Checks if a 4 star was rolled and adjusts counter
  if(outcomeValue != 1):
    count4 = count4+1
  else:
    count4 = 0

  return outcomeValue
```
Using the implementation is pretty straight forward:

```python
#A count of how many rolls since the last 4/5 star
count4 = 0
count5 = 0
```

```python
rollValue = conditionalRoll()
rollValue,count4,count5

#(2, 1, 1)
#(2, 2, 2)...so on
```
Now that we have the rolls functional, we simply need to 'bootstrap' this, or simply carry it out many times.

```python
#Now we boothstrap the conditionalRoll, and measure the results

attemptSize = 49950
resultArray = np.zeros(attemptSize)

for resultIndex in range(attemptSize):
  
  #performing a roll and storing into a very large array
  resultArray[resultIndex] = conditionalRoll()

```
The result of which may vary a little due to the random 'stochastic' nature of the simulations.

Now, let's derive our consolidated rate from our many rolls. The consolidated rate is simply the number of a particular star divided by the number of rolls. We use a counter to count how many of each star quality appeared in our simulation.

```python
countDict = Counter(resultArray)
countDict
#Counter({0.0: 709, 1.0: 6073, 2.0: 43168})
```

The counter acts as a dictionary of keys (0,1,2) associated with values (709, 6073, 43168). Next we simply divide by the total summons.

```python
consolidated5 = countDict[0]/attemptSize
consolidated4 = countDict[1]/attemptSize
consolidated5,consolidated4
#(0.014194194194194194, 0.12158158158158158)
```

The consolidated rate for this simulation was about 1.42%, which is closer to 1.435% than 1.6%, but we can get this to be a little more accurate. One way is to carry out the single simulation further out. Another, which we will proceed to do, is to carry out several simulation sets, to produce a distribution!

To do this, we encapsulate the process we just did into a loop, and carry it out n times (I chose 10). This is *much* more cleanly done with a few lines of code with a single function encapsulating the above. However, I wrote out the implementation in this way so each step is very intuitive.

```python
def bootstrapDistribution():
"""
INPUT: none
OUTPUT: consolidated rate for 4* and 5* as array
Functionality: Runs a bootstrap of simulation 10 times
"""
  #Empty array to store consolidated results
  numBootStrap = 10
  consolidated5Distribution = np.zeros(numBootStrap)
  consolidated4Distribution = np.zeros(numBootStrap)

  #Defining the array of rolls and its size
  attemptSize = 10000 
  resultArray = np.zeros(attemptSize)

  #Bootstrapping many rolls
  for consolidatedIndex in range(10):
    
    #Rolling attemptSize number of times
    for resultIndex in range(attemptSize):
      resultArray[resultIndex] = conditionalRoll()
      
    #Creating a dict counter of the array
    countDict = Counter(resultArray)

    #Calculating the consolidated rate for 5 and 4 star
    consolidated5 = countDict[0]/attemptSize
    consolidated4 = countDict[1]/attemptSize

    print(consolidated5)
    consolidated5Distribution[consolidatedIndex] = consolidated5
    consolidated4Distribution[consolidatedIndex] = consolidated4

  return consolidated5Distribution,consolidated4Distribution
```

This will return the consolidated rate for each of the 10 bootstraps.

```python
consolidated5Distribution,consolidated4Distribution = bootstrapDistribution()
```

We can use pandas to neatly store these values into a dataframe.

```python
df = pd.DataFrame(
    {'fiveStarConsolidated':consolidated5Distribution,
    'fourStarConsolidated':consolidated4Distribution})
df
```
Using pandas `df.describe()` will allow us to generate some simple descriptive statistics about the distribution of consolidated rates, which gives us a better reflection of what it may be. I happened to get results as follows.

| | fiveStarConsolidated | fourStarConsolidated |
| -- | ---------- | ---------------- |
|count | 10 |	10 |
|mean |	0.014340 |	0.122920 |
|std |	0.000869 |	0.003588 |
|min |	0.013200 |	0.117200 |
|25% |	0.013600 |	0.121050 |
|50% |	0.014200 |	0.123200 |
|75% |	0.015000 |	0.125050 |
|max |	0.015800 |	0.128400 |

This time, we acquired a consolidated rate of 1.43% using the mean of this distribution, which is fairly close. We also get an idea of how tightly is hugs the mean, along with any other descriptive statistics. However, our four star rate was a bit off from 13%. As we take more samples, the distribution of the sample means will become more normally distributed, and its mean should converge to our calculated consolidated rate.

If we wanted to be mathematically rigorous, we could prove that the 1.43% is very different from the 1.6% by taking a t-test using our sampled simulation data.

## Comparison of Consolidated Rates 

We used two different methods to calculate the consolidated rate, both of which roughly approximating to 1.43% for the consolidated rate assuming a flat 0.6% on each pull. Of course, this directly contradicts 1.6%. So, which is it? 

In [part two](/blog/genshin-wishes-p2), we will discuss alternative summoning methods which conserve the 1.6% rule by sacrificing the flat 0.6% chance assumption, and adheres more closely to player experiences.

See you then!

