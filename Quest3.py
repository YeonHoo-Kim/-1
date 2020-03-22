
# coding: utf-8

# In[ ]:


import requests
import time
import numpy as np

for i in range(10):
    value = np.random.randint(100)
    r = requests.get("https://api.thingspeak.com/update?api_key=49ITL0XX04D1MUDY&field1="+str(value))
    r.encoding = 'utf8'
    print(value)
    time.sleep(20)

