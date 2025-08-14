from fastapi import FastAPI

app = FastAPI() #variable will be an instance of the class FastAPI

'''
methods of operations:
POST: creat data
GET: to read data
PUT: to update data
DELETE: to delete data

others:
    options
    head
    pathch
    trace
'''

# this decorator tells FastAPI that the function below corresponds to the path / with an operation get.
@app.get("/")#The funbtion right below is in charge of handling request
def read_root(): 
    #This funtion it will be called whenever it receives a request to the path (this case the path is "/") using a GET operation
    return {"mensaje" : "Hola mundo"} #We can return lsit, arrays, any type of value (int, string, etc)


'''The value of the path parameter (item_id) will be passed to the function as an argument (item_id)'''
@app.get("/item/{item_id}") #we indicate the parameter in the path
def read_item(item_id): #Argument of the function
    return {"item_id" : item_id}

'''Now the value of the path parameter will be an int in python'''
@app.get("/number/{num}")
def number(num : int):#The argument will be an int 
    return (f'the number is {num} and his type is {type(num)}')


#https://fastapi.tiangolo.com/tutorial/path-params/#order-matters
