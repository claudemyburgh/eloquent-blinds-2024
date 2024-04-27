<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a sitemap for all pages';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = SitemapGenerator::create(config('app.url'));
        $sitemap
//                ->configureCrawler(function (Crawler $crawler) {
//                    $crawler->setMaximumDepth(3);
//                })
            ->getSitemap()
            ->add(Url::create(route('home'))->setPriority(0.8))
            ->add(Url::create(route('faqs.index'))->setPriority(0.8))
            ->add(Url::create(route('legal.privacy-policy'))->setPriority(0.5))
            ->add(Url::create(route('legal.warrants'))->setPriority(0.5))
            ->add(Url::create(route('quote.index'))->setPriority(0.8))
            ->add(Url::create(route('categories.index'))->setPriority(0.8));

        Category::all()->each(function (Category $category) use ($sitemap) {
            $sitemap->getSitemap()->add(Url::create(route('categories.show', $category->slug)));
        });

        Product::all()->each(function (Product $product) use ($sitemap) {
            $sitemap->getSitemap()->add(Url::create(route('products.show', [$product->category->slug, $product->slug])));
        });

        $sitemap->writeToFile(public_path('sitemap.xml'));

    }
}
