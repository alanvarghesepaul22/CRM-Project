import mysql.connector

dataBase = mysql.connector.connect(
    host = 'localhost',
    user ='root',
    password = 'password*'

)

# cursorobject
cursorObject = dataBase.cursor()

# create DB
cursorObject.execute("CREATE DATABASE elderco")
print("Done")