

export default function About(props) {


  return (
    <div className="container">

        <h1> About Us</h1>

        <p>TextUtils is an utiliy app which be used to modify the format of text</p>

        <br />
        <h4>Main Features</h4>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className={"accordion-header"} id="headingOne">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Upper Case</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    It will convert the entered text into upper case
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Lower Case</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                It will convert the entered text into lower case
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Camel Case</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                It will convert the entered text into Camel case
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className={"accordion-header"} id="headingOne">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <strong>Capitalized Case</strong>
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                It will convert the entered text into Capitalized case
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <strong>Alternating Case</strong>
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                It will convert the entered text into Alternating case
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} `} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <strong>Remove Extra Spaces</strong>
                </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    It will remove any extra spaces between words
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className={"accordion-header"} id="headingOne">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}` } type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    <strong>Copy Text</strong>
                </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    It will copy the existing text in the text box into your clipboard
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    <strong>Clear Text</strong>
                </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                    It will clear the text box
                </div>
                </div>
            </div>
        </div>

        {/* <button className="btn btn-primary my-3" >{btnText}</button> */}
    </div>
  )
}
