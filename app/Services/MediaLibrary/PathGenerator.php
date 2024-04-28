<?php

    namespace App\Services\MediaLibrary;

    use Spatie\MediaLibrary\MediaCollections\Models\Media;
    use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator as BasePathGenerator;

    class PathGenerator implements BasePathGenerator
    {
        public function getPath(Media $media): string
        {
            $path = parent::getPath($media);

            $this->setFolderPermissions($path);

            return $path;
        }

        private function setFolderPermissions($path): void
        {
            $folderPath = dirname($path);

            chmod($folderPath, 0755);
        }

        public function getPathForConversions(Media $media): string
        {
            $path = parent::getPathForConversions($media);

            $this->setFolderPermissions($path);

            return $path;
        }

        public function getPathForResponsiveImages(Media $media): string
        {
            $path = parent::getPathForResponsiveImages($media);

            $this->setFolderPermissions($path);

            return $path;
        }

    }
