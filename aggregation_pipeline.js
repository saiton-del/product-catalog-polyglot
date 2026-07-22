use('shop');

db.products.aggregate([
  { $unwind: '$ratings' },
  {
    $group: {
      _id: '$category',
      averageRating: { $avg: '$ratings' },
      ratingCount: { $sum: 1 }
    }
  },
  { $sort: { averageRating: -1, _id: 1 } },
  {
    $project: {
      _id: 0,
      category: '$_id',
      averageRating: { $round: ['$averageRating', 2] },
      ratingCount: 1
    }
  }
]);
