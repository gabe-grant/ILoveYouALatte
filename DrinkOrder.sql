CREATE TABLE [Customers] (
  [Id] INTEGER PRIMARY KEY Identity,
  [CustFirebaseId] VARCHAR,
  [CustLastName] VARCHAR,
  [CustFirstName] VARCHAR,
  [CustEmail] VARCHAR
)
GO

CREATE TABLE [DrinkOrder] (
  [Id] INTEGER PRIMARY KEY Identity,
  [DrinkPrice] INTEGER,
  [DrinkSize] VARCHAR,
  [MilkFoam] VARCHAR,
  [HotOrIced] VARCHAR,
  [MilkChoice] VARCHAR,
  [DrinkSyrup] VARCHAR,
  [DrinkSweetner] VARCHAR,
  [EspressoShots] INTEGER,
  [Toppings] VARCHAR,
  [CustId] INTEGER
)
GO

ALTER TABLE [DrinkOrder] ADD FOREIGN KEY ([CustId]) REFERENCES [Customers] ([Id])
GO
