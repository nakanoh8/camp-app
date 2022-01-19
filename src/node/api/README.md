# Create Tables

npx sequelize-cli migration:generate --name Users

npx sequelize-cli migration:generate --name Gears

npx sequelize-cli migration:generate --name Sites

npx sequelize-cli migration:generate --name UserGears

npx sequelize-cli migration:generate --name UserSites

# Create Models

npx sequelize-cli model:generate --name User --underscored --attributes name:string,email:string,password:string

npx sequelize-cli model:generate --name Gear --underscored --attributes name:string,gear_brand_id:integer

npx sequelize-cli model:generate --name Site --underscored --attributes name:string

npx sequelize-cli model:generate --name UserGear --underscored --attributes user_id:integer purchase_at:date

npx sequelize-cli model:generate --name UserSite --underscored --attributes visit_at:date