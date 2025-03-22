flowchart TD
    %% App Entry
    app[App Module]
    
    %% Modules
    auth[Auth Module]
    user[User Module]
    inventory[Inventory Module]
    pos[POS Module]
    dashboard[Dashboard Module]
    customer[Customer Module]
    cart[Cart Module]
    health[Health Module]
    
    %% Config / DB
    config[Config Module]
    db[Database]

    %% Auth submodules
    authCtrl[Auth Controller]
    authSrv[Auth Service]
    localStrat[Local Strategy]
    jwtStrat[JWT Strategy]
    googleStrat[Google Strategy]
    
    %% User submodules
    userCtrl[User Controller]
    userSrv[User Service]
    
    %% Inventory submodules
    invCtrl[Inventory Controller]
    invSrv[Inventory Service]
    
    %% POS submodules
    posCtrl[POS Controller]
    posSrv[POS Service]
    
    %% Dashboard submodules
    dashCtrl[Dashboard Controller]
    dashSrv[Dashboard Service]
    
    %% Customer submodules
    custCtrl[Customer Controller]
    custSrv[Customer Service]
    
    %% Cart submodules
    cartCtrl[Cart Controller]
    cartSrv[Cart Service]
    
    %% Health submodules
    healthCtrl[Health Controller]
    healthSrv[Health Service]
    
    %% Database Entities
    userEnt[User Entity]
    invEnt[Inventory Entity]
    transEnt[Transaction Entity]
    cartEnt[Cart Entity]
    cartItemEnt[CartItem Entity]
    custEnt[Customer Entity]
    
    %% Relationships
    app --> auth
    app --> user
    app --> inventory
    app --> pos
    app --> dashboard
    app --> customer
    app --> cart
    app --> health
    app --> config

    auth --> authCtrl
    auth --> authSrv
    authSrv --> localStrat
    authSrv --> jwtStrat
    authSrv --> googleStrat

    user --> userCtrl
    user --> userSrv

    inventory --> invCtrl
    inventory --> invSrv

    pos --> posCtrl
    pos --> posSrv

    dashboard --> dashCtrl
    dashboard --> dashSrv

    customer --> custCtrl
    customer --> custSrv

    cart --> cartCtrl
    cart --> cartSrv

    health --> healthCtrl
    health --> healthSrv

    %% Data Access (via TypeORM)
    authSrv -.-> userEnt
    userSrv -.-> userEnt
    invSrv -.-> invEnt
    posSrv -.-> transEnt
    cartSrv -.-> cartEnt
    cartSrv -.-> cartItemEnt
    custSrv -.-> custEnt
    healthSrv -.-> userEnt

    %% DB is provided via config and shared across modules
    config --> db