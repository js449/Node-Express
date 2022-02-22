console.log("This is tutorial 69.0.0");
//node_modules folder --- this folder will have all the modules related to our project (all the dependencies we are going to use
//with the help of 'require')
//package -- few files written by someone that we are using for our project.

//Commands

//to creat package.json ---npm init (it initialise the existing folder as a node package, this json file will 
//have all the details of folder. now whatever packages we install will be added to the dependencies by node. )
//for examples
//npm install slugify  -- slugify package will installed and added to dependencies
//npm install slugify@1.3.5  -- to install the specific version of a package (major(1) - minor(3) - patch(5))
//npm install express -- express package will installed and added to dependencies
//npm install -- to install node modules(shorthand just in case if we delete the node modules by mistake)

//Note - we can use 'npm i package_name' or 'npm i' as well instead of npm install package_name   -- to install a package

//in package.json file, // '^' means it will install the exact version of the package and '~' means it will also  
    // install the latest version if there is a new patch added in the version & if there is a '>' sign then this
    // means that next bigger version of the existing version. 

    //npm view package_name version --- to view the version of the package

// 1.0.0 --  create a package with version
// 1.0.1 -- fix some patches (for example fixing some bugs in my package because vesion not working properly)
// 1.1.0 -- did minor changes in my old veersion (Example writing a function in my package for printing 
            //HTML preety(adding new features without breaking old one))
// 2.0.0 -- update or did major changes in my version(Example removing old functions which cannot be used again)


//Dev dependencies --  dependendies that we need during development but not in production
//nodemon - so when we run the nodemon on brwoser, it will reflect all the changes on the server at the same time. 
//good for live projects. with the help of this we can see the live changes and we don't have to kill the server again and again.
//npm install nodemon --save-dev   //save dev makes it dev dependencies
//npm install nodemon --global    //to use the package from somewhere else