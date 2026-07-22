use("shop");

db.products.aggregate([

{
    $unwind:"$ratings"
},

{
    $group:{
        _id:"$category",
        averageRating:{
            $avg:"$ratings"
        },
        totalRatings:{
            $sum:1
        }
    }
},

{
    $sort:{
        averageRating:-1
    }
}

]);