// GPS

function callGPS() {
    let optionsGPS = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    function success(pos) {
        let crd = pos.coords;

        alert(`Ваше текущее местоположение:
                    Широта: ${crd.latitude},
                    Долгота: ${crd.longitude},
                    Плюс-минус ${crd.accuracy} метров.`,
        );
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert('Ваше текущее местоположение не определено');
    };

    navigator.geolocation.getCurrentPosition(success, error, optionsGPS);
}