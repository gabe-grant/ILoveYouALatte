CREATE TABLE [dbo].[Customers] (
    [Id]             INT         IDENTITY (1, 1) NOT NULL,
    [CustFirebaseId] NVARCHAR(28) NOT NULL,
    [CustLastName]   NVARCHAR(50) NOT NULL,
    [CustFirstName]  NVARCHAR(50) NOT NULL,
    [CustEmail]      NVARCHAR(255) NOT NULL,
    [UserTypeId] INT NOT NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

