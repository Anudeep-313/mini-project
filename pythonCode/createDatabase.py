import mysql.connector

mydb = mysql.connector.connect(host="hostname",user="username",password="")

mycursor = mydb.cursor()

mycursor.execute("CREATE DATABASE SALES")