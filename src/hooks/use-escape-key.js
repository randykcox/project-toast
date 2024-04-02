import React from "react";

function useEscapeKey(callback) {
    React.useEffect(() => {
        if (typeof callback !== 'function') {
            throw new Error('Invalid useEscapeKey callback. Must be a function.')
            return
        }

        function callbackOnEscape(event) {
            if (event.code === 'Escape') {
                callback()
            }
        }

        document.addEventListener('keydown', callbackOnEscape)

        return () => {
            document.removeEventListener('keydown', callbackOnEscape)
        }
    }, [])
}

export default useEscapeKey