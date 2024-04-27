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
                    'title' => 'Shutters',
                    'slug' => 'shutters',
                    'excerpt' => 'Discover the pinnacle of safety, durability, and style with our Security Shutters. ',
                    'body' => 'Discover the pinnacle of safety, durability, and style with our Security Shutters. Offering a blend of security and sophistication, these window shutters, shutter blinds, and louvre shutters are crafted from high-quality aluminum. Enjoy the perfect balance of privacy and natural light control with snugly fitting louvres that can be adjusted to your preference.
With our Security Shutters, say goodbye to traditional burglar bars and security gates. Our customizable range fits a variety of door and window formats and is available in a selection of finishes to complement your aesthetic.',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Indoor Blinds',
                    'slug' => 'indoor-blinds',
                    'excerpt' => 'Upgrade your space with our sleek indoor blinds!',
                    'body' => 'Upgrade your space with our sleek indoor blinds! Crafted from quality materials like wood, vinyl, or aluminum, these stylish window coverings offer total light and privacy control.
                     Choose from chic styles like Roller, Venetian, Vertical Blinds to perfectly complement any room. With manual or motorized options, our custom-made blinds fit any window size. Elevate your home or office with our versatile indoor blinds today!.
                ',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Outdoor Blinds',
                    'slug' => 'outdoor-blinds',
                    'excerpt' => 'Outdoor blinds can provide protection from sun, wind and rain, and can be controlled manually or with motorization. They come in various styles, such as roll-up, retractable, or fixed, and can be a great addition to any outdoor living space',
                    'body' => "Outdoor blinds can provide protection from sun, wind and rain, and can be controlled manually or with motorization. They come in various styles, such as roll-up, retractable, or fixed, and can be a great addition to any outdoor living space",
                    'parent_id' => null,
                    'live' => false,
                ],
                [
                    'title' => 'Motion Blinds',
                    'slug' => 'motion-blinds',
                    'excerpt' => 'Experience the future of window coverings with MotionBlinds!',
                    'body' => 'Experience the future of window coverings with MotionBlinds! Our smart technology offers a diverse range of battery-powered and wired motors and controls for residential, commercial, and hospitality settings. Enjoy seamless connectivity and effortless assembly for hassle-free installation. Control your blinds effortlessly via smartphone, smart speakers, remote controls, or manual pull motion.

Discover our standout Eve MotionBlinds series, featuring battery-powered motors with Apple HomeKit integration. Developed in collaboration with Eve Systems, a renowned leader in the smart home industry, it brings unparalleled convenience to your living spaces.',
                    'parent_id' => null,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],

                // Venetian Blinds
                [
                    'title' => 'Venetian Blinds',
                    'slug' => 'venetian-blinds',
                    'excerpt' => 'Venetian blinds evoke luxury and timelessness, effortlessly transforming any space.',
                    'body' => 'Customize your light and privacy preferences with a variety of slats, hardware, and accessories, all coordinated for a cohesive window treatment. Our Venetian blinds collection provides solutions for any window covering need, from basic to exclusive, for both residential and commercial settings.
As window covering specialists, we draw on years of experience to create innovative products developed in-house by our experts. With insights from global trends and data, we offer everything you need to curate your ideal Venetian blinds assortment.',
                    'parent_id' => 2,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],

                [
                    'title' => 'Roller Blinds',
                    'slug' => 'roller-blinds',
                    'excerpt' => 'Roller blinds reign as the world\'s favorite shading solution, boasting endless style and functionality options. Their simplicity makes them ideal for both homes and offices.',
                    'body' => 'Roller blinds reign as the world\'s favorite shading solution, boasting endless style and functionality options. Their simplicity makes them ideal for both homes and offices.
        Our comprehensive product range caters to every roller blind need, from basic to exclusive, ready-made to made-to-measure, and for residential or commercial spaces.
        Drawing on our expertise as window covering specialists, we offer innovative, in-house designed products developed over years of experience. With insights from global trends and data, we provide all the components necessary to curate your perfect roller blind assortment.',
                    'parent_id' => 2,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],

                [
                    'title' => 'Vertical Blinds',
                    'slug' => 'vertical-blinds',
                    'excerpt' => 'Vertical blinds are making a comeback, offering a chic and trendy window solution perfect for contemporary homes and offices.',
                    'body' => 'Vertical blinds are making a comeback, offering a chic and trendy window solution perfect for contemporary homes and offices. Their simplicity complements any window or patio door, with options to part left, right, or split evenly. The clean lines allow precise control over light, privacy, and views.
Easy to clean and providing excellent insulation, these blinds feature washable fabric strips in 90mm and 127mm widths, along with various colour and texture options, including total block-out PVC. Our patented stainless steel rods ensure long-lasting durability, free from corrosion for years of hassle-free use.',
                    'parent_id' => 2,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],
                [
                    'title' => 'Zebra Blinds',
                    'slug' => 'zebra-blinds',
                    'excerpt' => 'Craft an enchanting ambiance with our Zebra blinds collection, delicately filtering light to create intimacy. By blending transparent and closed stripes, you can effortlessly control the desired lighting effect.',
                    'body' => 'Craft an enchanting ambiance with our Zebra blinds collection, delicately filtering light to create intimacy. By blending transparent and closed stripes, you can effortlessly control the desired lighting effect. With a wide array of fabric options, including plain, jacquards, and nature-inspired materials, in both transparent and blackout qualities, Zebra blinds offer limitless decorative opportunities. From light, natural hues to warm and cheerful tones, our collection complements both modern and rustic interiors seamlessly.',
                    'parent_id' => 2,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],

                [
                    'title' => 'Honeycomb Blinds',
                    'slug' => 'Honeycomb-blinds',
                    'excerpt' => 'Optimize energy efficiency with honeycomb blinds, featuring isolating and heat-reflecting qualities.',
                    'body' => 'Optimize energy efficiency with honeycomb blinds, featuring isolating and heat-reflecting qualities. Their modern design and functional features make them ideal for any space. Our complete honeycomb solutions, including fabrics, systems, and automation, cater to diverse needs, from basic to exclusive, ready-made to made-to-measure. With years of expertise, we offer innovative products designed in-house to meet global trends and data, ensuring the best assortment for you.',
                    'parent_id' => 2,
                    'popular' => (bool)false,
                    'live' => (bool)true,
                ],


            ];

            foreach ($categories as $category) {
                Category::create($category);
            }
        }
    }
