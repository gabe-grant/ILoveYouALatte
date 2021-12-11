CREATE TABLE [dbo].[Customers] (
    [Id]             INT           IDENTITY (1, 1) NOT NULL,
    [CustFirebaseId] VARCHAR (28)  NOT NULL,
    [CustLastName]   VARCHAR (50)  NOT NULL,
    [CustFirstName]  VARCHAR (50)  NOT NULL,
    [CustEmail]      VARCHAR (255) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

CREATE TABLE [dbo].[DrinkOrder] (
    [Id]            INT          IDENTITY (1, 1) NOT NULL,
    [DrinkSize]     VARCHAR (50) NULL,
    [MilkFoam]      VARCHAR (50) NULL,
    [HotOrIced]     VARCHAR (50) NULL,
    [MilkChoice]    VARCHAR (50) NULL,
    [DrinkSyrup]    VARCHAR (50) NULL,
    [DrinkSweetner] VARCHAR (50) NULL,
    [EspressoShots] VARCHAR (50) NULL,
    [Toppings]      VARCHAR (50) NULL,
    [CustId]        INT          NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([CustId]) REFERENCES [dbo].[Customers] ([Id])
);