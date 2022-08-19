//Сохранение в файл txt из input`a

    // function textToFile (text, name) {
    //     const blob = new Blob([text], { type: 'text/plain' });
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = name || 'text.txt';
    //     a.type = 'text/plain';
    //     a.addEventListener('click', () => {
    //         setTimeout(() => window.URL.revokeObjectURL(url), 10000);
    //     })
    //     a.click()
    //     console.log(url)
    // }
    // document.getElementById('button_save').addEventListener('click', () => {
    //     textToFile (document.getElementById('input_txt').value, 'file.txt')
    // })
    
//Сохранение и переход на страницу с содержанием файла

    document.getElementById('button_save').addEventListener('click', () => {
        let string = JSON.parse(document.getElementById('input_txt').value)
        const blob = new Blob([string])
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        a.type = 'text/plain';
        a.addEventListener('click', () => {
            setTimeout(() => window.URL.revokeObjectURL(url), 1000);
        })
        a.click()
    })
