const Translator = () => {
    const translate = ()  => {
        const url = 'https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=de&api-version=3.0&profanityAction=NoAction&textType=plain';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key, 
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: [
                {
                    Text: 'I would really like to drive your car around the block a few times.'
                }
            ]
        };

        // fetch(`${process.env.REACT_APP_Base_URL}de${process.env.REACT_APP_Query_Params}`, options)
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                const translatedText = response[0].translations[0].text; 
                console.log(translatedText); 
            })
            .catch(err => console.error(err)); 

    }

    return (
        <section className="translator">
            <div className="row-wrapper">
                <div className="translator-container input-lang">
                    <div className="top-row">
                        <button 
                        className="btn btn-primary btn-translate"
                        onClick={translate}
                        > 
                            Translate
                        </button>
                    </div>
                    <form action="" className="input-form">
                        <textarea
                        className="text-box"
                        placeholder="Enter Text (any language)"
                        >
                        </textarea>
                    </form>
                </div>
                <div className="translator-container output-lang">
                    <div className="top-row">
                        <select 
                        name="languages" 
                        id="languages"
                        className="form-select form-select-sm">
                            <option value="hi">Hindi</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="de">German</option>
                            <option value="es">Spanish</option>
                        </select>
                        <p className="text-box output-box">
                            Output Text
                        </p>
                    </div>
                </div>
            </div>
        </section>
     ); 
}

export default Translator; 