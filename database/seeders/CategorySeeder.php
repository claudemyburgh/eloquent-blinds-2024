<?php

    namespace Database\Seeders;

    use App\Models\Category;
    use Illuminate\Database\Seeder;

    class CategorySeeder extends Seeder
    {
        /**
         * Run the database seeds.
         */
        public function run(): void
        {
            $categories = [
                [
                    'title' => 'Indoor Blinds',
                    'slug' => 'indoor-blinds',
                    'excerpt' => 'Indoor blinds are popular for their ability to control light and privacy, and can come in various styles such as Roman, roller, Venetian, and cellular.',
                    'body' => 'Indoor blinds are window coverings that are installed inside a room or building, as opposed to outside. They can be made from a variety of materials such as wood, vinyl, aluminum, or fabric, and can be controlled manually or with motorization.

Indoor blinds are popular for their ability to control light and privacy, and can come in various styles such as Roman, roller, Venetian, and cellular. They can be custom-made to fit any window size and can be a great addition to any room in your home or office.
                ',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Outdoor Blinds',
                    'slug' => 'outdoor-blinds',
                    'excerpt' => 'Outdoor blinds can provide protection from sun, wind and rain, and can be controlled manually or with motorization. They come in various styles, such as roll-up, retractable, or fixed, and can be a great addition to any outdoor living space',
                    'parent_id' => null,
                    'live' => false,
                ],
                [
                    'title' => 'Motion Blinds',
                    'slug' => 'motion-blinds',
                    'excerpt' => 'Experience smart convenience with MotionBlinds. Wide range of motors and controls for all types of window coverings. Easy connection, assembly and installation. Control via smartphone, smart speaker, remote, and manual pull. Standout feature: Eve MotionBlinds series with battery-powered motors and Apple HomeKit technology. Developed in collaboration with Eve Systems, a leader in smart home industry.',
                    'body' => 'MotionBlinds is a smart technology for window coverings that is available in a wide range of battery-powered and wired motors and controls for all types of window coverings, including residential, commercial and hospitality. The technology is designed to be simple and easy to connect, with straightforward assembly and installation for ultimate ease of use. The window coverings can be controlled in a variety of ways, including smartphones, smart speakers, remote controls, and even manually with a simple pull that automatically sets the blinds in motion.

One of the standout features of MotionBlinds is the Eve MotionBlinds series, which utilizes battery-powered motors with Apple HomeKit technology. This series was created in collaboration with Eve Systems, a leader in the smart home industry, known for developing accessories for the Apple HomeKit ecosystem.',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Aluminium Blinds',
                    'slug' => 'aluminium-blinds',
                    'excerpt' => 'Upgrade your space with our exclusive 50mm aluminum Venetian blinds. Inspired by the car industry, these robust, glossy blinds exude power and glamour. Perfect for adding industrial-chic style to any room. Wide range of appealing shades to match any interior design. Durable aluminum ensures long-lasting use in any home or commercial space',
                    'body' => "Introducing our exclusive aluminium collection of 50mm Venetian blinds, designed to bring a touch of industrial sophistication to any space. Inspired by the sleek lines and bold hues of the automobile industry, these blinds boast a robust design and subtle gloss that exude power and glamour. The aluminum material is a perfect choice for creating an industrial-chic atmosphere in any room.

The collection features an appealing color palette that ranges from light, warm, and neutral shades to mysterious, powerful, and modern hues, providing a wide range of options to match any interior design style. Whether you're looking to add a touch of elegance to your living room or create a bold statement in your office space, these venetian blinds are sure to elevate any room in your home or commercial spaces with their modern and sophisticated look. With the durability of aluminium, you'll be able to enjoy your new blinds for years to come.",
                    'parent_id' => 1,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'BamBoo Blinds',
                    'slug' => 'bam-boo-blinds',
                    'excerpt' => 'Eco-friendly elegance for your space with our 50mm Bamboo Venetian blinds. Natural wood grain & lightweight material exude serenity. Wide range of warm, timeless colors. Versatile addition to any home. Sophisticated choice for any interior design style',
                    'body' => 'This collection of 50mm Venetian blinds made from Bamboo wood exudes natural elegance with its refined wood grain structure and lightweight material. It brings in a serene and peaceful atmosphere to any interior and provides an eco-friendly touch.

The Bamboo collection has a wide range of warm and timeless colors that are easy to match with any interior design, making it a great addition to any space. The balanced appearance and elegance of these Bamboo Venetian blinds makes it a versatile and sophisticated choice for any style of home.',
                    'parent_id' => 1,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Basswood Blinds',
                    'slug' => 'basswood-blinds',
                    'excerpt' => 'Add warmth and coziness to any room with our Basswood series of wooden Venetian blinds. Heavier, lacquered wood in a range of colors for a robust, sturdy look. Variations in color, grain, and warping may occur due to natural characteristics of wood. Avoid using in humid/wet areas, clean with dusters/soft cloths, and use mild detergent for heavy build-up. Not a light-blocking option, but offers privacy. 50mm width, stable and suitable for venetian blinds, with ladder string and wood valance. Consider dye lot differences, fading over time, and weight when ordering. Recommended to order all blinds for a room at once.',
                    'body' => "The Basswood series of blinds are made of a thicker, heavier wooden material and are available in a wide range of lacquered wood colors, providing a more robust and sturdy look. The natural beauty of wood brings warmth and coziness to any room, while also making windows the focal point. However, due to the natural characteristics of wood, variations in color, grain texture, and warping may occur depending on the environment.

It is important to be cautious when using wood venetians in humid or wet areas, as they may warp. When close to the sea, it is advisable to keep the blinds in a pulled-up position when windows are fully opened to prevent salt build-up and prolong their lifespan. Cleaning should be done using a clean, dry feather duster, soft cloth, or dust mitt to gently wipe off dust and debris, and for significant residue build-up a mild detergent can be used. These blinds are supplied with ladder string and cords which are color-coordinated and a wood valance that finishes off the product beautifully.

Wood venetians are not light-blackout products, they will allow some light into the room while ensuring privacy. They are available in 50mm width as it is more stable than narrower widths. They are also heavier than other products and it's recommended to not order sizes that would be too heavy to pull up. Basswood is a stable wood and suitable for venetian blinds but still a natural product. Slats should be tilted to the open position before pulling the blinds up. Be aware that dye lot differences are probable, therefore, it's recommended to order all blinds needed for a room at once, and to indicate if the blinds will be in one opening. Over time, some fading may occur, especially on darker colors.",
                    'parent_id' => 1,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Honeycomb Blinds',
                    'slug' => 'honeycomb-blinds',
                    'excerpt' => 'Efficient and stylish Honeycomb Blinds collection. Unique design provides insulation and heat reflection for energy savings. Contemporary aesthetic with horizontal lines and cell structure. Wide range of options for residential and commercial use, from fabric choices to motorized systems. From basic to exclusive, ready-made to custom-made, and for single rooms to large-scale projects. Discover a solution for all your window covering needs',
                    'body' => "The honeycomb blinds collection is an energy-efficient solution that helps to save energy while maintaining a stylish look. Their unique honeycomb structure provides insulation and heat reflection properties that contribute to energy conservation. With their distinctive horizontal lines and cell structure, honeycomb blinds create a modern and contemporary aesthetic.

This collection offers a wide range of functional features that make them an ideal choice for both residential and commercial spaces. From fabric choices to systems and automation concepts like MOTION, our smart and motorized blinds, this collection has a solution for every window covering situation. The collection ranges from basic to exclusive, ready-made to custom-made, and commercial to projects, so whether you're looking for window coverings for a single room or for a large-scale project, you'll find what you need in this collection.",
                    'parent_id' => 1,
                    'popular' => (bool)true,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Roller Blinds',
                    'slug' => 'roller-blinds',
                    'excerpt' => 'Elevate your window coverings with our versatile and functional Roller Blinds. Popular worldwide for their simplicity and suitability for both residential and commercial use. Wide range of options, from basic to exclusive and ready-made to custom-made. Innovative in-house designs and developments from specialist with years of experience in window coverings. Stay current with global trends and data to offer the best assortment to meet customer needs and preferences',
                    'body' => 'Roller blinds are an all-time global favorite due to their versatility and functionality. They are the most popular shading product in the world, and their simple design makes them ideal for both residential and commercial use. Our extensive product line includes a wide range of options to meet every roller blind situation, from basic to exclusive, ready-made to made-to-measure, and everything in between.

As a specialist in window coverings, our many years of experience are evident in our innovative, in-house designed and developed products. We stay up-to-date with global trends and data to provide our customers with the best roller blind assortment that meets their needs and preferences.',
                    'parent_id' => 1,
                    'popular' => (bool)true,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Venetian Blinds',
                    'slug' => 'venetian-blinds',
                    'excerpt' => 'Achieve timeless style and function with our Venetian Blinds collection. Luxurious window coverings with versatile options for controlling light and privacy. Mix and match slats, hardware and accessories for cohesive look. Comprehensive concept for all window covering situations, from basic to exclusive and residential to commercial. In-house designed and developed products from a specialist in window coverings with a wealth of experience. Utilize global trends and data to create the perfect Venetian blind assortment for your space.',
                    'body' => 'Venetian blinds are the epitome of style and functionality. These timeless window coverings add a touch of luxury to any space and provide a wide range of options for controlling light and privacy. With the ability to mix and match slats, hardware and accessories in various colors, Venetian blinds can easily create a cohesive look in any room. Our collection of Venetian blinds is a comprehensive concept that offers solutions for all window covering situations, from basic to exclusive, residential to commercial, and everything in between.

As a specialist in window coverings, we have a wealth of experience that is reflected in our innovative, in-house designed and developed products. Utilizing global trends and data, we provide you with all the elements you need to create the perfect Venetian blind assortment for your space.',
                    'parent_id' => 1,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Zebra Blinds',
                    'slug' => 'zebra-blinds',
                    'excerpt' => 'Add elegance and intimacy to any room with our Zebra Blinds collection. Control light with transparent and opaque stripes. Variety of fabric options, plain, jacquards, nature fabrics and both transparent and black-out qualities for endless decorating possibilities. Wide range of colors and styles, from light natural shades to warm tones, for modern or rustic interior. Effortlessly create a unique, stylish look in any room.',
                    'body' => "The Zebra blinds collection is the perfect way to add a touch of elegance and intimacy to any room. With the combination of transparent and opaque stripes in the fabric, you can easily control the amount of light that enters the room and create the ideal ambiance. Whether you're looking for a more open and airy feel or a more intimate and cozy atmosphere, the Zebra blinds make it easy to achieve the perfect balance of light and privacy. This collection offers a wide variety of fabric options, including plain, jacquards, and nature fabrics, in both transparent and black-out qualities, providing endless possibilities for decorating your space.

The collection features a range of colors and styles, from light, natural shades to warm, cheerful tones, ensuring there is something to suit every interior, whether it is modern or has a rustic feel. With this collection of Zebra blinds, you can effortlessly create a unique and stylish look in any room of your home.",
                    'parent_id' => 1,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Shutters',
                    'slug' => 'shutters',
                    'excerpt' => 'Indoor blinds are popular for their ability to control light and privacy, and can come in various styles such as Roman, roller, Venetian, and cellular.',
                    'body' => 'Indoor blinds are window coverings that are installed inside a room or building, as opposed to outside. They can be made from a variety of materials such as wood, vinyl, aluminum, or fabric, and can be controlled manually or with motorization.

Indoor blinds are popular for their ability to control light and privacy, and can come in various styles such as Roman, roller, Venetian, and cellular. They can be custom-made to fit any window size and can be a great addition to any room in your home or office.
                ',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],

            ];


            foreach ($categories as $category) {
                Category::create($category);
            }
        }
    }
