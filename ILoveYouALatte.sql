CREATE TABLE [Customers] (
  [Id] INTEGER,
  [CustFirebaseId] VARCHAR,
  [CustLastName] VARCHAR,
  [CustFirstName] VARCHAR,
  [CustEmail] VARCHAR
)
GO

CREATE TABLE [DrinkOrder] (
  [Id] INTEGER,
  [DrinkType] VARCHAR,
  [DrinkDescription] VARCHAR,
  [DrinkPrice] INTEGER,
  [DrinkSize] VARCHAR,
  [MilkFoam] VARCHAR,
  [HotOrIced] VARCHAR,
  [MilkChoice] VARCHAR,
  [DrinkSyrup] VARCHAR,
  [DrinkSweetner] VARCHAR,
  [EspressoShots] INTEGER,
  [Toppings] VARCHAR
)
GO

ALTER TABLE [DrinkOrder] ADD FOREIGN KEY ([Id]) REFERENCES [Customers] ([Id])
GO
