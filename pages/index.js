import React from 'react';

const HomePage = () => {
    return (
        <div style={{ backgroundColor: '#ffccff', padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: '#ff66b3' }}>Welcome to Sugar Palm Club!</h1>
            <p style={{ fontSize: '18px', color: '#993366' }}>Your ultimate destination for all things bedazzling!</p>
            
            <section style={{ margin: '40px 0' }}>
                <h2 style={{ color: '#ff66b3' }}>Featured Products</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '10px', width: '30%' }}>
                        <h3>Bedazzled Phone Cases</h3>
                        <p>Shine bright with our unique designs!</p>
                    </div>
                    <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '10px', width: '30%' }}>
                        <h3>Luxe Accessories</h3>
                        <p>Transform your look with our exclusive range!</p>
                    </div>
                    <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '10px', width: '30%' }}>
                        <h3>Customized Orders</h3>
                        <p>Create your own bedazzling masterpiece!</p>
                    </div>
                </div>
            </section>

            <section style={{ margin: '40px 0', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
                <h2 style={{ color: '#ff66b3' }}>Custom Orders</h2>
                <p>If you have a unique vision, let us bring it to life! Contact us today to start your custom order.</p>
                <button style={{ backgroundColor: '#ff66b3', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Start Your Custom Order
                </button>
            </section>
        </div>
    );
};

export default HomePage;