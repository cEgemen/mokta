import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useSafeScreenSizes = () => {
    const window = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const safeScreenWidth = window.width - insets.left - insets.right;
    const safeScreenHeight = window.height - insets.top - insets.bottom;

    return {safeScreenHeight,safeScreenWidth}
}

export default useSafeScreenSizes;