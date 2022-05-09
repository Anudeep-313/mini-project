import mysql.connector
import pandas as pd
from time import sleep
mydb = mysql.connector.connect(host="hostname",user="username",password="",database="SALES")


mycursor = mydb.cursor()


df=pd.read_csv("train.csv")
fet = "select ROWID from ORDERS ORDER BY ROWID DESC LIMIT 1"
mycursor.execute(fet)

count=mycursor.fetchone()
if(count == None):
    count=0
else:
    count=count[0]

sql = "INSERT INTO ORDERS (ROWID, ORDERID, ORDERDATE, SHIPDATE, SHIPMODE, CUSTOMERID, CUSTOMERNAME, SEGMENT, COUNTRY, CITY, STATE, POSTALCODE, REGION, POSTALID, CATEGORY, SUBCATEGORY, PRODUCTNAME, PRICE) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"

for i in range(df.shape[0]):
    if(i%5 == 0):
        sleep(60)
    count+=1
    val = (count, df.at[i,'Order ID'], df.at[i,'Order Date'], df.at[i,'Ship Date'], df.at[i,'Ship Mode'], df.at[i,'Customer ID'], df.at[i,'Customer Name'], df.at[i,'Segment'], df.at[i,'Country'], df.at[i,'City'], df.at[i,'State'], df.at[i,'Postal Code'], df.at[i,'Region'], df.at[i,'Product ID'], df.at[i,'Category'], df.at[i,'Sub-Category'], df.at[i,'Product Name'], float(df.at[i,'Sales']))
    mycursor.execute(sql,val)
    mydb.commit()