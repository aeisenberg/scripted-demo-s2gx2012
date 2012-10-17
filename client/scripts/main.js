
require(["modules/usersModule","modules/bookstoreModule"],function(mUsers,mBookstore) {
	var usercount = mUsers.getUserCount();
	
	// Buy some books for these users: 
	for (var i = 0;i < usercount; i++) {
		console.log(mUsers.getUser(i).name);
		mBookstore.buyBook(mUsers.getUser(i).fullName(), 1);
	}
});
