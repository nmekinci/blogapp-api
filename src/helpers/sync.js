"use strict"

// sync():

module.exports = async function () {

    // return null;

    /* REMOVE DATABASE *
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

    /* User */
    const User = require('../models/userModel')
    await User.deleteMany() // !!! Clear collection.
    await User.create({
        "_id": "65343222b67e9681f937f001",
        "userName": "admin",
        "password": "aA?123456",
        "email": "admin@site.com",
        "firstName": "admin",
        "lastName": "admin",
        "image":"admin",
        "intro":"admin",
        "isActive": true,
        "isAdmin": true,
        "isGuest":false,
        "blogsCounter":0,
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0
    })
    await User.create({
        "_id": "65343222b67e9681f937f002",
        "userName": "test1",
        "password": "aA?123456",
        "email": "test1@site.com",
        "firstName": "test1",
        "lastName": "test1",
        "image":"test1",
        "intro":"test1",
        "isActive": true,
        "isAdmin": false,
        "isGuest":false,
        "blogsCounter":0,
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0
    })
    await User.create({
        "_id": "65343222b67e9681f937f003",
        "userName": "2",
        "password": "aA?123456",
        "email": "2@site.com",
        "firstName": "2",
        "lastName": "2",
        "image":"2",
        "intro":"2",
        "isActive": true,
        "isAdmin": false,
        "isGuest":false,
        "blogsCounter":0,
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0
    })

    /* Blog */
    const Blog = require('../models/blogModel')
    await Blog.deleteMany() // !!! Clear collection.
    await Blog.create({
        "_id": "65343222b67e9681f937f104",
        "category":"65343222b67e9681f937f201",
        "creator":"65343222b67e9681f937f001",
        "title": "Adidas",
        "image": "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo-1991.jpg",
        "content":"adidas",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f105",
        "category":"65343222b67e9681f937f202",
        "creator":"65343222b67e9681f937f002",
        "title": "Nike",
        "image": "https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg",
        "content":"Nike",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f107",
        "category":"65343222b67e9681f937f203",
        "creator":"65343222b67e9681f937f003",
        "title": "Puma",
        "image": "https://staticg.sportskeeda.com/editor/2023/03/bda84-16779522739911-1920.jpg",
        "content":"Puma",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f108",
        "category":"65343222b67e9681f937f204",
        "creator":"65343222b67e9681f937f001",
        "title": "Lotto",
        "image": "https://1000logos.net/wp-content/uploads/2021/05/Lotto-logo.png",
        "content":"Lotto",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f109",
        "category":"65343222b67e9681f937f201",
        "creator":"65343222b67e9681f937f002",
        "title": "Kinetix",
        "image": "https://seeklogo.com/images/K/kinetix-logo-73FB3FD17D-seeklogo.com.png",
        "content":"Kinetix",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f110",
        "category":"65343222b67e9681f937f202",
        "creator":"65343222b67e9681f937f003",
        "title": "Reebok",
        "image": "https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png",
        "content":"Reebok",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f122",
        "category":"65343222b67e9681f937f203",
        "creator":"65343222b67e9681f937f001",
        "title": "Samsung",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
        "content":"Samsung",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f123",
        "category":"65343222b67e9681f937f204",
        "creator":"65343222b67e9681f937f002",
        "title": "Ulker",
        "image": "https://cdn.worldvectorlogo.com/logos/ulker.svg",
        "content":"Ulker",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f129",
        "category":"65343222b67e9681f937f201",
        "creator":"65343222b67e9681f937f003",
        "title": "Tommy",
        "image": "https://i.pinimg.com/736x/d3/09/1a/d3091a1a5350fede679b2c7461b0745b.jpg",
        "content":"Tommy",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f130",
        "category":"65343222b67e9681f937f202",
        "creator":"65343222b67e9681f937f001",
        "title": "LG",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_symbol.svg/640px-LG_symbol.svg.png",
        "content":"LG",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })
    await Blog.create({
        "_id": "65343222b67e9681f937f131",
        "category":"65343222b67e9681f937f203",
        "creator":"65343222b67e9681f937f002",
        "title": "Apple",
        "image": "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
        "content":"Apple",
        "published":"true",
        "approvedByAdmin":"ok",
        "likesCounter":0,
        "viewsCounter":0,
        "commentsCounter":0,
        "reportsCounter":0
    })

    /* Category */
    const Category = require('../models/categoryModel')
    await Category.deleteMany() // !!! Clear collection.
    await Category.create({
        "_id": "65343222b67e9681f937f201",
        "userId":"65343222b67e9681f937f001",
        "title": "Food",
        "approvedByAdmin":"ok"
    })
    await Category.create({
        "_id": "65343222b67e9681f937f202",
        "userId":"65343222b67e9681f937f002",
        "title": "Drink",
        "approvedByAdmin":"ok"
    })
    await Category.create({
        "_id": "65343222b67e9681f937f203",
        "userId":"65343222b67e9681f937f003",
        "title": "Jewelery",
        "approvedByAdmin":"ok"
    })
    await Category.create({
        "_id": "65343222b67e9681f937f204",
        "userId":"65343222b67e9681f937f001",
        "title": "Electronic",
        "approvedByAdmin":"ok"
    })

    /* Comment */
    const Comment = require('../models/commentModel')
    await Comment.deleteMany() // !!! Clear collection.
    await Comment.create({
        "_id": "65343222b67e9681f937f302",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f104",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f303",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f105",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f304",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f106",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f305",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f107",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f310",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f108",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f315",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f109",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f333",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f108",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f334",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f107",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })
    await Comment.create({
        "_id": "65343222b67e9681f937f335",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f106",
        "comment":"comment",
        "approvedByAdmin":"ok"
    })

    /* View */
    const View = require('../models/viewModel')
    await View.deleteMany() // !!! Clear collection.
    await View.create({
        "_id": "65343222b67e9681f937f421",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f106",
        "itWasAGuest":false,
    })
    await View.create({
        "_id": "65343222b67e9681f937f422",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f105",
        "itWasAGuest":false,
    })
    await View.create({
        "_id": "65343222b67e9681f937f423",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f104",
        "itWasAGuest":false,
    })
    await View.create({
        "_id": "65343222b67e9681f937f426",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f107",
        "itWasAGuest":false,
    })
    await View.create({
        "_id": "65343222b67e9681f937f427",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f108",
        "itWasAGuest":false,
    })

    /* Like */
    const Like = require('../models/likeModel')
    await Like.deleteMany() // !!! Clear collection.
    await Like.create({
        "_id": "65343222b67e9681f937f513",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f107"
    })
    await Like.create({
        "_id": "65343222b67e9681f937f514",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f108"
    })
    await Like.create({
        "_id": "65343222b67e9681f937f516",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f106"
    })
    await Like.create({
        "_id": "65343222b67e9681f937f519",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f107"
    })
    await Like.create({
        "_id": "65343222b67e9681f937f520",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f108"
    })

    /* Report */
    const Report = require('../models/reportModel')
    await Report.deleteMany() // !!! Clear collection.
    await Report.create({
        "_id": "65343222b67e9681f937f614",
        "userId":"65343222b67e9681f937f003",
        "blogId":"65343222b67e9681f937f107",
        "report":"string",
        "approvedByAdmin":"ok"
    })
    await Report.create({
        "_id": "65343222b67e9681f937f615",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f106",
        "report":"string",
        "approvedByAdmin":"ok"
    })
    await Report.create({
        "_id": "65343222b67e9681f937f617",
        "userId":"65343222b67e9681f937f001",
        "blogId":"65343222b67e9681f937f105",
        "report":"string",
        "approvedByAdmin":"ok"
    })
    await Report.create({
        "_id": "65343222b67e9681f937f624",
        "userId":"65343222b67e9681f937f002",
        "blogId":"65343222b67e9681f937f104",
        "report":"string",
        "approvedByAdmin":"ok"
     })

    /* Finished */
    console.log('* Synchronized.')
}