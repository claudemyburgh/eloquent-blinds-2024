import React, {useState} from 'react';
import {ImageProps, ProgressProps} from "@/types/datatable";
import {ProgressBar, UploadCard} from "@/dashboard/Components/Upload/index";
import {router} from "@inertiajs/react";
import uuid from "lodash/uniqueId";
import {CloudArrowUpIcon} from "@heroicons/react/24/solid";

function ImageDropzone({model, namedRoute}: ImageProps) {

  const [isDragOver, setIsDragOver] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[] | null>(null);
  const [progress, setProgress] = useState<ProgressProps>({
    loaded: 0,
    total: 0,
    progress: 0,
    bytes: 0,
    rate: 0,
    estimate: 0,
    event: {
      isTrusted: true,
    },
    upload: false,
    percentage: 0,
  });

  const files: any[] = [];

  function handleDrag(e: any) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    setIsDragOver(false);
  }

  function generateFileObject(file: any) {
    let fileObjectIndex =
      files.push({
        id: uuid(),
        file,
        progress: 0,
        failed: false,
        loadedBytes: 0,
        totalBytes: 0,
        timeStarted: new Date().getTime(),
        secondsRemaining: 0,
        finished: false,
        cancelled: false,
        xhr: null,
      }) - 1;
    return files[fileObjectIndex];
  }

  function handleDrop(e: any) {
    e.preventDefault();
    setIsDragOver(false);
    setImageFiles(e.dataTransfer.files);
    addFiles(e.dataTransfer.files);
  }

  function handleChange(e: any) {
    setImageFiles(e.target.files);
    addFiles(e.target.files);
  }

  function addFiles(files: any) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      upload(file);
    }
  }

  function upload(file: any) {
    const fileObject = generateFileObject(file);
    const form = new FormData();
    form.append("id", model.id);
    form.append("image", fileObject.file);

    router.post(route(namedRoute, model), form, {
      forceFormData: false,
      preserveState: true,
      headers: {
        "content-type": "multipart/form-data",
      },
      onProgress: (process: any) => {
        setProgress({
          ...progress,
          ...process,
        });
      },
      onSuccess: () => {
        setTimeout(() => {
          setProgress({
            loaded: 0,
            total: 0,
            progress: 0,
            bytes: 0,
            rate: 0,
            estimate: 0,
            event: {
              isTrusted: true,
            },
            upload: false,
            percentage: 0,
          });
        }, 1000);
      },
    });
  }

  return (
    <>
      <div>
        <div
          className={`relative transition my-6 border border-dashed border-gray-500 dark:border-gray-200 min-h-[160px] rounded-lg
                  ${isDragOver ? "opacity-100 shadow-lg shadow-gray-500/10 cursor-grabbing" : "opacity-70 border-gray-500 dark:border-gray-200"}
                  `}
          onDrag={handleDrag}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragEnter}
        >
          <label
            htmlFor={`image`}
            className={`absolute inset-0 flex items-center justify-center rounded-lg flex-col space-y-2 tracking-wide
                        ${isDragOver ? " cursor-grabbing" : "cursor-pointer"}
                    `}
          >
            <span>
             <CloudArrowUpIcon className={'size-12'}/>
            </span>
            <span>
              <strong>Drop file to upload</strong> or <u>click to select</u>
            </span>
          </label>
          <input onChange={handleChange} className={`sr-only`} type="file" multiple name="image[]" id="image"/>
        </div>

        {progress.percentage > 0 &&
          <div className={`flex items-center justify-center pb-4`}>
            <div className="flex space-x-3 h-20">
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
              <div className="bg-primary-500 spinner size-2 rounded-full"></div>
            </div>
          </div>

        }

        {model?.media && (
          <div className={`grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 `}>
            {model.media.map((image: any) => (
              <UploadCard key={image.uuid} file={image}/>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ImageDropzone;
