import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
      >
        Open Modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Modal Title
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This is a modal with transition effects using @headlessui/react.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default MyModal;
