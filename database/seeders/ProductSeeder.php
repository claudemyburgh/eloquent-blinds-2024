<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productsOld = [
            [
                'title' => 'Nairobi', //1
                'slug' => 'nairobi', //1
                'category_id' => 8,
                'excerpt' => 'The Nairobi fabric boasts of its natural and one-of-a-kind texture and color variations, which gives a sense of purity to any interior space. Its generous width makes it perfect for larger windows and various other uses.',
                'body' => 'Transform the look of your home with the Nairobi roller blinds. These roller shades are not just any ordinary window covering, they are made with a unique fabric that boasts a captivating texture and color variation. This makes them the ideal solution for adding a touch of natural purity to any interior space. The generous width of the Nairobi fabric used for these roller blinds makes them an excellent choice for larger windows or any other use you can imagine.

These rollup blinds provide an effortless way to control light and privacy in your home, and are the perfect complement to any decor style. With the Nairobi roller blinds, you will have a stylish, functional and affordable window covering solution that will transform your home into a warm and inviting space.',
            ],
            [
                'title' => 'Waving Leave', //2
                'slug' => 'waving-leave', //2
                'category_id' => 8,
                'excerpt' => 'The intricate and delicate leaves and flowers come to life on printed and jacquards woven fabrics that are in soft pastel colors, giving a romantic and gentle appeal that exudes femininity.',
                'body' => 'The intricate and delicate leaves and flowers come to life in the form of soft pastel colored printed and jacquard woven fabrics that are used for roller blinds and fabric blinds. These window coverings exude femininity with their gentle and romantic appeal, making them a standout choice for any interior space. The use of soft pastel colors creates a visually stunning effect, adding a touch of elegance and sophistication to any room.

Whether used for curtains, upholstery, or other home textiles, these rollup blinds and roller shades are the perfect way to add a touch of romance and charm to your decor. The attention to detail and craftsmanship evident in each piece is sure to impress, making these window coverings a standout choice for any decorating project.',
            ],
            [
                'title' => 'Essential 3000 10%', //3
                'slug' => 'essential-3000-10%', //3
                'category_id' => 8,
                'excerpt' => 'Screen 3010 is a fabric made of polyester featuring a delicate 2 x 2 basket weave structure, that provides a subtle texture while still allowing for a clear view through.',
                'body' => "Essential 3000 10% is a premium quality fabric made of durable polyester and featuring a distinctive 2 x 2 basket weave structure. This unique design offers a delicate texture that provides a subtle touch to any interior space, while still allowing for a clear view through the fabric. This makes Essential 3000 10% an ideal choice for roller blinds, fabric blinds, and roller shades, where you want to maintain a connection to the outside world while still controlling light and privacy.

The versatility of this window covering fabric makes it suitable for a range of decor styles and interiors, making it a popular choice for both residential and commercial spaces. Whether you're looking to add a touch of texture to a room or simply want a window covering solution that provides a clear view, Essential 3000 10% is the perfect choice.

 Its combination of texture and transparency makes it a standout choice for any interior space, and its durability and versatility make it a smart investment for any home or business. With Essential 3000 10%, you can enjoy a window covering solution that is both stylish and functional, offering the perfect balance of light control and privacy.",
            ],
            [
                'title' => 'Essential 4000 5%', //4
                'slug' => 'essential-4000-5%', //4
                'category_id' => 8,
                'excerpt' => 'Screen 4005, made of polyester, has a delicate 2 x 2 basket weave structure that provides a subtle texture while allowing only 5% visibility, making it perfect for privacy needs',
                'body' => "The Essential 4000 5% fabric blinds are a popular choice for those in need of a window covering solution that provides ample privacy. Made from durable polyester, these roller shades feature a delicate 2 x 2 basket weave structure that not only adds a subtle texture to the appearance, but also restricts visibility to just 5%.

 This makes the Essential 4000 5% rollup blinds an ideal option for those who require a high level of privacy in their homes or workplaces. Whether you're looking for a modern and stylish window covering or a functional and practical solution, these roller blinds are a great choice for any setting.",
            ],
            [
                'title' => 'Mombassa Light Filtering', //5
                'slug' => 'mombassa-light-filtering', //5
                'category_id' => 8,
                'excerpt' => 'The Mombassa LF collection features a contemporary design and a tactile sensation. Its natural fabrics provide a cozy ambiance in any room, and the soft color scheme adds a touch of sophistication to the space.',
                'body' => "The Mombassa Light Filtering collection is a sophisticated and contemporary line of window coverings that provides a warm and cozy ambiance to any room. This collection features roller blinds and fabric blinds, also known as roller shades, which are an ideal solution for those looking for a stylish and functional window covering.

 These rollup blinds are made of natural fabrics that not only feel great to the touch, but also add a touch of sophistication to any space with their soft color scheme. Furthermore, the light filtering capabilities of these blinds make them perfect for controlling the amount of light that enters your room, giving you the perfect balance of privacy and natural light.

  Whether you're looking for a modern solution for your home or office, the Mombassa Light Filtering collection has everything you need to add a touch of style and comfort to any space.",
            ],
            [
                'title' => 'Proto', //6
                'slug' => 'proto', //6
                'category_id' => 8,
                'excerpt' => 'The Prato collection features modern, light-filtering fabrics made from recycled yarns and available in a variety of popular colors. It gives an aesthetic look with an eco-friendly touch.',
                'body' => 'The Prato collection is a modern and eco-conscious line of window coverings that seamlessly blends style and sustainability. This collection features roller blinds and fabric blinds, also known as roller shades, that are designed to enhance the look of any room while also being environmentally friendly.

The light-filtering fabrics used in this collection are made from recycled yarns, making it an ideal choice for those who want to make a positive impact on the environment while also dressing their windows in a stylish and modern way. The Prato collection is available in a variety of popular colors, making it easy to find the perfect match for your home or office decor.

These rollup blinds are the perfect solution for those looking for a functional and stylish window covering that is not only stylish, but also kind to the planet. With the Prato collection, you can enjoy the perfect balance of aesthetic appeal and eco-friendliness with its light filtering capabilities.',
            ],
            [
                'title' => 'Berlin', //7
                'slug' => 'berlin', //7
                'category_id' => 8,
                'excerpt' => 'The Berlin collection presents fabrics that completely block out daylight with a robust, durable textile appearance. The material provides complete darkness and privacy, and the collection is perfect for creating a cozy and secluded ambiance.',
                'body' => "The Berlin collection is a line of highly durable and functional window coverings designed for complete darkness and privacy. Featuring roller blinds and fabric blinds, also known as roller shades, this collection is perfect for creating a cozy and secluded ambiance in any room.

The robust and durable fabric used in this collection provides complete block-out of daylight, making it ideal for those looking to create a peaceful and tranquil environment free from distractions and unwanted light. These rollup blinds are the perfect solution for anyone who wants to enhance the privacy of their space and create a cozy atmosphere with a stylish and functional window covering.

Whether you're looking for a solution for your bedroom or office, the Berlin collection has everything you need to add a touch of sophistication and functionality to your space with its block-out capabilities.",
            ],
            [
                'title' => 'Mombassa Block-Out', //8
                'slug' => 'mombassa-block-out', //8
                'category_id' => 8,
                'body' => "The Mombassa Block-out collection is a stylish and modern line of window coverings that boasts of a modern aesthetic and a pleasant texture. The collection features roller blinds and fabric blinds, also known as roller shades, that are made from naturally delicate fabrics, resulting in a warm and inviting atmosphere in any setting.

The soft color palette of these rollup blinds adds a touch of elegance to any interior, making them the perfect choice for anyone who wants to enhance the look and feel of their space while also enjoying complete block-out capabilities. Whether you're looking for a solution for your bedroom or office, the Mombassa Block-out collection has everything you need to create a peaceful and tranquil environment with its block-out properties, while also adding a touch of sophistication to your decor with its modern and stylish design.",
            ],
            [
                'title' => 'Yamar', //9
                'slug' => 'yamar', //9
                'category_id' => 8,
                'excerpt' => 'The Yamar collection features roller blind fabrics with a textured appearance, which adds a modern aesthetic. The collection comes in a range of neutral color tones.',
                'body' => "The Yamar collection is a line of modern and sophisticated roller blinds that feature textured fabrics for a unique and stylish touch. These roller blinds, also known as fabric blinds or roller shades, are available in a range of neutral color tones, making them the perfect choice for anyone looking for versatility in their window covering options.

The textured appearance of the fabrics in this collection adds a modern aesthetic that is sure to impress, making the Yamar collection a great option for anyone looking to enhance the look and feel of their space. These rollup blinds are not only stylish, but also provide the benefits of a functional window covering, making them the ideal solution for any room in your home.

Whether you're looking to add a touch of sophistication to your bedroom, office, or any other space, the Yamar collection has everything you need to enjoy the benefits of a stylish and functional window covering.",
            ],
            [
                'title' => 'Satin Flower', //10
                'slug' => 'satin-flower', //10
                'category_id' => 8,
                'excerpt' => 'Printed and jacquard woven fabrics feature intricate leaf and flower designs that bring a sense of liveliness. The soft pastel colors used in the fabrics create a pure and gentle atmosphere in the interior.',
                'body' => 'Roller blinds, fabric blinds, roller shades, and other types of rollup blinds can play a vital role in elevating the aesthetics of a room. These window coverings come in a range of designs, colors, and patterns that are perfect for adding depth and character to any interior space.

One popular trend in window covering design is the use of intricate leaf and flower patterns that give a sense of liveliness and energy to the room. These designs are often featured on printed or jacquard woven fabrics, which are prized for their ability to provide both texture and visual interest.

To create a pure and gentle atmosphere, designers often choose soft pastel colors for their roller blinds and other fabric window coverings. These colors help to add a soothing, serene quality to the room, making it a peaceful and welcoming space.',
            ],
            [
                'title' => 'Skyros', //10
                'slug' => 'skyros', //10
                'category_id' => 10,
                'excerpt' => 'The delicately woven structure and subtle satin gloss of these double roller fabrics brings a feeling of elegance to the interior.',
                'body' => 'The delicate weave and subtle satin gloss of these roller blinds, also known as fabric blinds or roller shades, make them a perfect choice for a sophisticated window covering solution. These roll-up blinds bring a touch of elegance to any interior, with their sleek and refined appearance.

The Skyros zebra blind, in particular, is a standout product in this category, offering the timeless appeal of classic zebra blinds with a modern twist. These blinds are carefully crafted to provide a luxurious finish to your windows, making them an ideal choice for those who value both style and functionality. The intricate design of the roller shades and the smooth satin finish of the fabric combine to create a mesmerizing effect, elevating the overall look of your interior space.',
            ],
            [
                'title' => 'Zakynthos', //10
                'slug' => 'zakynthos', //10
                'category_id' => 10,
                'excerpt' => 'The refined silk-look texture of these double roller fabrics adds zest and makes the colors pop-out. The open weaving texture of the transparent stripes give the fabrics an o en feel.',
                'body' => 'The Zakynthos zebra blinds are a luxurious and stylish window covering solution for any interior design. Made from high-quality double roller fabrics, these roller blinds, also known as fabric blinds or roller shades, have a refined silk-look texture that adds a touch of glamour to your decor. The colors of the fabric pop out, bringing a new level of energy to the room. The open weaving texture of the transparent stripes in the Zakynthos zebra blinds gives the fabrics a light and airy feel, creating an illusion of spaciousness and making the most of natural light.

These zebra blinds are a unique and sophisticated way to add a touch of elegance to your windows. As a type of roll-up blinds, the Zakynthos zebra blinds offer versatility and ease of use. Whether you want to let in natural light, block out the sun, or simply add a touch of elegance to your decor, these zebra blinds are the perfect choice. They are a timeless addition to any home, office, or commercial space and are sure to be appreciated by anyone who values style and sophistication.',
            ],
            [
                'title' => 'Palma Light Filtering', //10
                'slug' => 'palma-light-filtering', //10
                'category_id' => 7,

                'excerpt' => 'Create a pure atmosphere with the delicate light filtering and block-out fabrics in this collection. The refined plain fabrics in the Palma collection are available in 25 mm and 45 mm.',

                'body' => "For those searching for a sophisticated and serene atmosphere in their home or office, the Palma collection of roller blinds, fabric blinds, roller shades, and other types of rollup blinds is the perfect solution. These window coverings are designed to enhance the look and feel of any interior space, using the latest in light filtering technology to create a tranquil and calming environment.

The collection features sophisticated plain fabrics that come in two sizes, 25mm and 45mm, making it easy to find the perfect option for your specific window dimensions. Whether you're looking to add a touch of elegance to your home or create a peaceful and productive workspace, the Palma collection offers a variety of light filtering roller blinds, fabric blinds, and roller shades that are sure to meet your needs. With its high-quality materials and expert craftsmanship, this collection of rollup blinds is a reliable and attractive solution for any space.",
            ],
            [
                'title' => 'Palma Block-Out', //10
                'slug' => 'palma-block-out', //10
                'category_id' => 7,

                'excerpt' => 'Create a pure atmosphere with the delicate light filtering and block-out fabrics in this collection. The refined plain fabrics in the Palma collection are available in 25 mm and 45 mm.',

                'body' => "The Palma collection of roller blinds, fabric blinds, roller shades, and other types of rollup blinds offers a sophisticated and refined solution for those seeking to create a pure atmosphere in their interior space. With its delicate block-out fabrics, this collection provides an effective solution for blocking out unwanted light and noise, creating a peaceful and serene environment. The refined plain fabrics in the Palma collection are available in two convenient sizes, 25mm and 45mm, making it easy to find the perfect window covering for your specific needs.

Whether you're looking to create a calming and restful bedroom or a focused and productive workspace, the Palma collection has the block-out roller blinds, fabric blinds, and roller shades you need to achieve your desired atmosphere. So if you're looking for high-quality, attractive window coverings that can transform your interior space, consider the pure and refined fabrics in the Palma collection.",
            ],
        ];

        $products = [
            [
                'title' => 'ShutterGuard® Aluminium Security Shutters',
                'slug' => 'shutterguard-aluminium-security-shutters',
                'excerpt' => 'Upgrade your windows or doors with our sleek and secure aluminum shutters. These folding, louvred shutters offer both style and safety, enhancing the aesthetics of your home, commercial, or retail space while providing security.',
                'body' => 'Upgrade your windows or doors with our sleek and secure aluminum shutters. These folding, louvred shutters offer both style and safety, enhancing the aesthetics of your home, commercial, or retail space while providing security.
                    Control light, noise, and temperature with ease, while our patented gear lock ensures steadfast protection. Our unique locking systems, including Cisa and Boltfix, offer added security with a specialized key. Plus, optional double-sided locks are available upon request for added peace of mind.',
                'category_id' => 1,
                'popular' => (bool) true,
                'live' => (bool) true,
            ],
            [
                'title' => 'ShutterStyle Aluminium Barrier Security Shutters',
                'slug' => 'shutterstyle-aluminium-barrier-security-shutters',
                'excerpt' => 'Elevate your space with our stylish and secure ShutterStyle® Shutters, designed for the fashion-forward and security-conscious.',
                'body' => 'Elevate your space with our stylish and secure ShutterStyle® Shutters, designed for the fashion-forward and security-conscious. With six years of refinement, our shutters boast the Taylor seal of quality, offering premium style and affordability. Featuring a 60mm bolt and sleek slide action with a push-lock system, they blend beauty with functionality. Crafted from slim yet durable aluminum, our shutters are suitable for indoor and outdoor use, offering modular track options, a cutting-edge light-blocking system, and seamless lines.',
                'category_id' => 1,
                'popular' => (bool) true,
                'live' => (bool) true,
            ],
            [
                'title' => 'Hurricane Aluminium Shutters',
                'slug' => 'hurricane-aluminium-shutters',
                'excerpt' => 'Our hurricane shutters provide protection during storms and allow sunlight to brighten your days.',
                'body' => 'Our hurricane shutters provide protection during storms and allow sunlight to brighten your days. Originally designed for storm protection without sacrificing aesthetics, these stylish aluminium shutters are perfect for homes and offices. Functional, durable, rustproof, and easy to clean, they come with warranties of up to 10 years. With folding louvres, they open up spaces while controlling light, noise, and temperature. Note: Hurricane shutters are not intended as a security solution.',
                'category_id' => 1,
                'popular' => (bool) false,
                'live' => (bool) true,
            ],
            [
                'title' => 'Thermowood® Shutters',
                'slug' => 'thermowood-shutters',
                'excerpt' => 'Experience the perfect blend of natural light and privacy with Thermowood® Shutters.',
                'body' => 'Experience the perfect blend of natural light and privacy with Thermowood® Shutters. These custom-made louvre door shutters are crafted from durable, engineered PVC for longevity. Tested under various conditions, they come with a 3-year warranty for peace of mind. Enhance modern living with retractable stacking shutters, seamlessly merging indoor and outdoor spaces for an extended living area.',
                'category_id' => 1,
                'popular' => (bool) false,
                'live' => (bool) true,
            ],
            [
                'title' => 'Timber Wood Shutters',
                'slug' => 'timber-wood-shutters',
                'excerpt' => 'Discover our Timber Wood Shutters: solid, affordable, and stunning.',
                'body' => 'Discover our Timber Wood Shutters: solid, affordable, and stunning. Crafted in South Africa from hand-selected timber, they offer both style and functionality for indoor and outdoor use. With components up to 30% thicker than imports, they\'re built to last and backed by a 5-year warranty, maintaining our reputation for quality. Choose from standard or custom configurations to suit any design need, from circular to triangular shapes, offering unparalleled flexibility',
                'category_id' => 1,
                'popular' => (bool) false,
                'live' => (bool) true,
            ],

        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
