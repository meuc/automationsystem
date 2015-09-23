var house = {
	"name":"Your house",
	"rooms": [
		{
			"id" 			: 1,
			"name" 		: "Hallway",
			"width"		: "202px",
			"height"	: "263px",
			"top"		 	: "224px",
			"left"	 	: "460px",
			"floor"	 	: "brown_carpet.jpg",
			"doors"	 	: 1,
			"windows" : 0,
			"radiators": 0,
			"furniture": ["<div class='door-mat part'></div>",
										"<img src='img/coats.png' class='coats part' alt='coats'>"],
			"electronics": [],
			"tabs"		: []
		},
		{
			"id" 			: 2,
			"name" 		: "Balcony",
			"width"		: "99px",
			"height"	: "188px",
			"top"			: "69px",
			"left"		: "0px",
			"floor"		: "concrete.png",
			"doors"		: 0,
			"windows" : 0,
			"radiators": 0,
			"furniture": [, 
										"<img src='img/garden_chair.png' class='chair part' alt='Chair'>", 
										"<img src='img/garden_table.png' class='garden-table part' alt='table'>"],
			"electronics": [],
			"tabs"		: [
				{
					"name" : "Plant",
					"usage": 10,
					"tag" : "<img src='img/plant2.png' class='plant pointer part' alt='Plant'>",
					"duration" : "finite"
				}
			]
		},
		{
			"id" 			: 3,
			"name" 		: "Bedroom",
			"width"		: "387px",
			"height"	: "234px",
			"top"			: "0px",
			"left"		: "484px",
			"floor"		: "parket.png",
			"doors"		: 1,
			"windows" : 2,
			"radiators": 1,
			"furniture": ["<div class='carpet carpet1 part'></div>",
										"<div class='carpet carpet2 part'></div>",
										"<img src='img/bed.png' class='bed part' alt='bed'>", 
										"<div class='bedtable bedtable1 part'></div>", 
										"<div class='bedtable bedtable2 part'></div>",		
										"<div class='commode part'></div>", 
										"<img src='img/laundry_basket.png' class='laundry part' alt='Laundry'>", 
										"<div class='closet part'></div>", 
										"<img src='img/jewellery.png' class='jewellery part' alt='Jewellery'>"],
			"electronics": [
				{
					"name" : "Bedsidelamp1",
					"usage": 10,
					"tag"	 : "<img src='img/bed_lamp.png' class='bedlamp lamp1 pointer part' alt='Bed side lamp'>"
				},
				{
					"name" : "Bedsidelamp2",
					"usage": 10,
					"tag"	 : "<img src='img/bed_lamp.png' class='bedlamp lamp2 pointer part' alt='Bed side lamp'>"
				}
			],
			"tabs"		: [
				{
					"name" : "Plant",
					"usage": 10,
					"tag" : "<img src='img/plant.png' class='plant pointer part' alt='Plant'>", 
					"duration" : "finite"
				},
				{
					"name" : "Roses",
					"usage": 10,
					"tag" : "<img src='img/roses.png' class='roses pointer part' alt='roses'>",
					"duration" : "finite"
				}
			]
		},
		{
			"id" 			: 4,
			"name" 		: "Living",
			"width"		: "405px",
			"height"	: "345px",
			"top"			: "69px",
			"left"		: "89px",
			"floor"		: "carpet.png",
			"doors"		: 3,
			"windows" : 2,
			"radiators": 2,
			"furniture": ["<div class='dining-table part'></div>", 
										"<img src='img/chair.png' class='chair chair1 part' alt='Chair'>", 
										"<img src='img/chair.png' class='chair chair2 part' alt='Chair'>", 
										"<img src='img/chair.png' class='chair chair3 part' alt='Chair'>", 
										"<img src='img/chair.png' class='chair chair4 part' alt='Chair'>", 
										"<img src='img/chair.png' class='chair chair5 part' alt='Chair'>",
										"<div class='shelf part'></div>",
										"<img src='img/couch.png' class='couch part' alt='couch'>",
										"<div class='couch-table part'></div>",
										"<img src='img/ikea_lamp.png' class='ikea-lamp part' alt='IKEA lamp'>",
										"<div class='tv-table part'></div>"],
			"electronics": [
				{
					"name" : "Floor lamp",
					"usage": 10,
					"tag"	 : "<div class='ikea-bulp pointer part'></div>"
				},
				{
					"name" : "TV",
					"usage": 10,
					"tag"	 : "<img src='img/tv.png' class='tv pointer part' alt='tv'>"
				}
			],
			"tabs"		: [
				{
					"name" : "Plant1",
					"usage": 10,
					"tag" : "<img src='img/plant.png' class='plant plant1 pointer part' alt='Plant'>",
					"duration" : "finite"
				},
				{
					"name" : "Plant2",
					"usage": 10,
					"tag" : "<img src='img/plant2.png' class='plant plant2 pointer part' alt='Plant'>", 
					"duration" : "finite"
				}
			]
		},
		{
			"id" 			: 5,
			"name" 		: "Office",
			"width"		: "256px",
			"height"	: "128px",
			"top"			: "224px",
			"left"		: "615px",
			"floor"		: "parket.png",
			"doors"		: 1,
			"windows" : 1,
			"radiators": 1,
			"furniture": ["<div class='desk part'></div>",
										"<div class='shelf shelf1 part'></div>",
										"<div class='shelf shelf2 part'></div>",
										"<img src='img/office_chair.png' class='office-chair part' alt='Office chair'>",	
				 						"<img src='img/keyboard.png' class='keyboard part' alt='keyboard'>",
										"<img src='img/mouse.png' class='mouse part' alt='mouse'>"],
			"electronics": [
				{
					"name" : "Computer",
					"usage": 10,
					"tag"	 : "<img src='img/mac.png' class='mac pointer part' alt='Mac'>"
				}
			],
			"tabs"		: [
				{
					"name" : "Plant",
					"usage": 10,
					"tag" : "<img src='img/plant2.png' class='plant pointer part' alt='Plant'>",
					"duration" : "finite"
				}
			]
		},
		{
			"id" 			: 6,
			"name" 		: "Kitchen",
			"width"		: "218px",
			"height"	: "233px",
			"top"			: "342px",
			"left"		: "653px",
			"floor"		: "blue_tiles.jpg",
			"doors"		: 2,
			"windows" : 2,
			"radiators": 1,
			"furniture": ["<div class='kitchen-counter part'></div>",
										"<img src='img/fruit_bowl.png' class='fruitbowl part' alt='fruitbowl'>"],
			"electronics": [
				{
					"name" : "Stove",
					"usage": 10,
					"tag"	 : "<img src='img/stove.png' class='stove pointer part' alt='stove'>"
				},
				{
					"name" : "Microwave",
					"usage": 10,
					"tag"	 : "<img src='img/microwave.png' class='microwave pointer part' alt='microwave'>"
				}
			],
			"tabs"		: [
				{
					"name" : "Kitchen sink",
					"usage": 10,
					"tag" : "<img src='img/kitchen_sink.png' class='sink pointer part' alt='sink'>",
					"duration" : "ongoing"
				}
			]
		},
		{
			"id" 			: 7,
			"name" 		: "Bath",
			"width"		: "123px",
			"height"	: "98px",
			"top"			: "477px",
			"left"		: "570px",
			"floor"		: "bown_tiles.jpg",
			"doors"		: 1,
			"windows" : 0,
			"radiators": 0,
			"furniture": [],
			"electronics": [],
			"tabs"		: [
				{
					"name" : "Toilet",
					"usage": 10,
					"tag" : "<img src='img/toilet.png' class='toilet pointer part' alt='toilet'>",
					"duration" : "ongoing"
				},
				{
					"name" : "Bathroom sink",
					"usage": 10,
					"tag" : "<img src='img/sink.png' class='sink pointer part' alt='Sink'>",
					"duration" : "ongoing"
				},
				{
					"name" : "Bathtub",
					"usage": 10,
					"tag" : "<img src='img/tub.jpg' class='tub pointer part' alt='Bath tub'>",
					"duration" : "ongoing"
				}
			]
		}
	]
};