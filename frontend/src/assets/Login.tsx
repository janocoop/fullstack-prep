export default function Login() {
    return (
        <div style={{
            backgroundColor: "white",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
        }}>
            <input
                type="text"
                placeholder="Benutzername"
                style={{
                    position: 'absolute',
                    top: '700px',
                    left: '5px',
                    fontSize: '2em',
                    padding: '20px 10px',
                    backgroundColor: '#ed6e00',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '1px',
                }}
            />
            <a style={{ marginTop: '20px' }}>
                <img src="https://cdn2-assets.baam.ch/uploads/logo_image_item/file/ccc0aa1b81bf81e16c676ddb977c5881/1483613215/coop-logo-talendo.png"/>
            </a>
            <input
                type="password"
                placeholder="Passwort"
                style={{
                    position: 'absolute',
                    top: '700px',
                    right: '5px',
                    fontSize: '2em',
                    padding: '20px 10px',
                    backgroundColor: '#f7a101',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '1px',
                }}
            />
            <button style={{
                fontSize: '2em',
                padding: '20px 20px',
                backgroundColor: '#a84d00',
                color: 'white',
                border: 'black',
                borderRadius: '20px',
                zIndex: 0,
            }}>Login</button>
        </div>
    );
}
