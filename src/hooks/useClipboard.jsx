function useClipboard() {
    const copy = async text => {
        await navigator.clipboard.writeText(text);
    };
    return { copy };
}

export default useClipboard;