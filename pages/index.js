import React from 'react';

function Home() {
    return (
        <div style={{
            fontFamily: 'Arial',
            padding: '10px',
            backgroundColor: '#303030',
            color: '#d3d3d3',
            width: '80%',
            height: '80%',
            position: 'absolute',
            top: '10%',
            left: '10%'
        }}>
            <h1 style={{ color: '#d3d3d3', textAlign: 'center' }}>Hello Word!</h1>
            <p style={{ textAlign: 'center', lineHeight: '1.6' }}>
                A persistência é uma qualidade que pode nos ajudar a superar a insegurança. Como disse o famoso filósofo Confúcio, <br />
                <span style={{ fontStyle: 'italic' }}>"Transportai um punhado de terra todos os dias e fareis uma montanha".</span> Isso significa que pequenos passos consistentes
                podem levar a grandes realizações. Portanto, mesmo que você esteja inseguro, continue avançando. Cada pequena decisão que você toma,
                cada pequeno passo que você dá, está contribuindo para a sua montanha.
            </p>

            <p style={{ textAlign: 'center', lineHeight: '1.6', textShadow: '0 0 10px #d3d3d3' }}>
                Então, mesmo diante da insegurança, continue avançando. E lembre-se, estamos juntos nessa jornada. Conte comigo para te fortalecer.<br />
                <span style={{ fontWeight: 'bold' }}>Juntos, podemos superar qualquer barreira.</span>
            </p>
        </div>
    );
}       

export default Home;
