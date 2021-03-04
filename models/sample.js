// Pollution schema

{
	"_id": "XXXX",
	"pollution_type": "TYPE_POLLUTION",
	"photo": "UPLOADED_PHOTO",
	"description": "DESCRIPTION",
	"coords": "COORDS;COORDS"
	"post_by": [
		{
				"_id": ObjectID('AAAA'),
				"name": "PINCOPALLO"
		}
	]
}

// User schema

{
	"_id": "AAAA",
	"name": "PINCOPALLO",
	"psw": "PASSWORD",
	"e_mail": "E_MAIL",
	"uploads": [
	{
		"_id": ObjectID('XXXX'),
		"_id": ObjectID('XXXY'),
		"_id": ObjectID('XXXZ'),
	}]
}

// Cities schema

{
	"_id": "CCCC",
	"name": "NAMECITY",
	"coords":"COORDS;COORDS",
	"near_pollution": [{
		//Nearest pollution upload calcolated with $near
		"_id": ObjectID('XXXY')
	}]
}