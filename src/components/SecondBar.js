import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
    media: {
        marginRight: 20,
    },
    all: {
        width: '100vh',
    },
    space: {
        paddingLeft: 142,
        height: 100,
        width: 100,
        flexGrow: '.3'
    },
    pic: {
        height: 100,
        paddingTop: '20px',
    },
    topMargin: {
        paddingTop: '20px',
        paddingLeft: '50px'
    },
    button: {
        margin: '40px',
        padding: '10px',
        backgroundColor: 'green',
        fontSize: '20px',
        color: 'white'
    }
};

class SecondBar extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12} md={2}>
                    <h4> Running for Senator</h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum repudiandae laborum, error ipsa impedit possimus. Rerum, mollitia quasi.</p>
                </Grid>
                <Grid item xs style={styles.space}>
                    <img style={styles.pic} src="1024px-Beto_O'Rourke,_Official_portrait,_113th_Congress.jpg" alt="pic" />
                </Grid>
                <Grid item style={styles.topMargin} md={6}>

                    <TextField
                        id="filled-multiline-static"
                        label="Review"
                        multiline
                        rowsMax="3"
                        style={{ margin: 8 }}
                        placeholder="Write a 280 character review here..."
                        fullWidth
                        margin="normal"
                        variant="filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid>
                    <button style={styles.button}>SUBMIT</button>
                </Grid>
            </Grid>
        )
    }
}

export default SecondBar;