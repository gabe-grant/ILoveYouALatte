CREATE TABLE [dbo].[Customers] (
    [Id]             INT         IDENTITY (1, 1) NOT NULL,
    [CustFirebaseId] VARCHAR (1) NULL,
    [CustLastName]   VARCHAR (1) NULL,
    [CustFirstName]  VARCHAR (1) NULL,
    [CustEmail]      VARCHAR (1) NULL,
    [UserTypeId] NCHAR(10) NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

