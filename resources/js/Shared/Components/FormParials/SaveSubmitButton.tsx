import React, {FC} from "react";
import {PrimaryButton} from "@/dashboard/Components/Buttons";
import {Transition} from "@headlessui/react";

interface SaveProps {
  processing: boolean;
  recentlySuccessful: boolean;
  buttonText?: string;
  message?: string;
  type?: "button" | "reset" | "submit";
}

const SaveSubmitButton: FC<SaveProps> = ({
                                           processing,
                                           recentlySuccessful,
                                           buttonText = "Save",
                                           message = "Saved.",
                                           type = "submit",
                                         }) => {
  return (
    <div className="flex items-center gap-4">
      <PrimaryButton type={type} disabled={processing}>
        {buttonText}
      </PrimaryButton>

      <Transition
        show={recentlySuccessful}
        enterFrom="opacity-0"
        leaveTo="opacity-0"
        className="transition ease-in-out"
      >
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {message}
        </p>
      </Transition>
    </div>
  );
};

export default SaveSubmitButton;
