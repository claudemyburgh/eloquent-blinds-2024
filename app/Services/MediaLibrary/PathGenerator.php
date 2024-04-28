<?php

    namespace App\Services\MediaLibrary;

    use Spatie\MediaLibrary\MediaCollections\Models\Media;
    use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator as BaseGenerator;

    class PathGenerator implements BaseGenerator
    {
        /*
         * Get the path for the given media, relative to the root storage path.
         */
        public function getPath(Media $media): string
        {
            $path = $this->getBasePath($media) . '/';
            $this->setFolderPermissions($path);
            return $path;
        }

        /*
         * Get the path for conversions of the given media, relative to the root storage path.
         */

        protected function getBasePath(Media $media): string
        {
            $prefix = config('media-library.prefix', '');

            if ($prefix !== '') {
                return $prefix . '/' . $media->getKey();
            }

            return $media->getKey();
        }

        /*
         * Get the path for responsive images of the given media, relative to the root storage path.
         */

        private function setFolderPermissions($path): void
        {
            $folderPath = dirname($path);

            chmod($folderPath, 0755);
        }

        /*
         * Get a unique base path for the given media.
         */

        public function getPathForConversions(Media $media): string
        {
            $path = $this->getBasePath($media) . '/conversions/';
            $this->setFolderPermissions($path);
            return $path;
        }

        public function getPathForResponsiveImages(Media $media): string
        {
            $path = $this->getBasePath($media) . '/responsive-images/';
            $this->setFolderPermissions($path);
            return $path;
        }
    }
