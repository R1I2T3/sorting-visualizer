import { useId } from "react";
function useKey() {
    const key = useId()
    return key;
}
export default useKey;