export function Utils() {


}
export function novoMarker(position, id) {
    return {
        lat: position.lat(),
        lng: position.lng(),
        id: id,
        isOrigin: false,
        icon: undefined,
    }
}

export function changeMarker(markers, id, hasOrigin) {
    const novo_markers = [];

    markers.forEach((mk, i) => {
        if (mk.id !== id) {
            novo_markers.push(mk);
        } else {
            const novo = {
                lat: mk.lat,
                lng: mk.lng,
                id: mk.id,
                isOrigin: false,
                icon: undefined,
            };
            if (mk.icon === undefined) {
                if (!hasOrigin) {
                    novo.icon = "https://cdn-icons-png.flaticon.com/32/727/727590.png";
                    hasOrigin = true;
                }
            } else {
                novo.icon = undefined;
                hasOrigin = false;
            }
            novo_markers.push(novo);
        }
    });

    return { markers: novo_markers, hasOrigin: hasOrigin };
}