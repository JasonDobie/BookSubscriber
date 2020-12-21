Before running, please follow these steps:-
1. Change the connection string in appsettings.json to point to your server and database
2. Run update-database -context ApplicationDbContext
3. Run update-database -context PersistDbContext
4. Build the solution to install nuget packages
5. Run npm i to install Angular packages
6. The Swagger documentation/end points:- use the following url: http://localhost:<port>/swagger