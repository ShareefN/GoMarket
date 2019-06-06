// import React, { Component } from 'react';
// // import logo from './logo.png';
// // import Modal from 'react-awesome-modal';
// // import { Redirect } from 'react-router-dom'
// // import Avatar from '@material-ui/core/Avatar';
// // import Button from '@material-ui/core/Button';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import TextField from '@material-ui/core/TextField';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';
// // import Box from '@material-ui/core/Box';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Container from '@material-ui/core/Container';


// class Login extends Component {
//   constructor(props){
//      super(props);
//      this.state = {
//       visible: false
//      }
//      this.openModal = this.openModal.bind(this);
//      this.closeModal = this.closeModal.bind(this);
//    }

//    onSubmit(){
//      alert('hii')
//    }

//    openModal(){
//      this.setState({
//        visible: true
//      })
//    }

//    closeModal(){
//      this.setState({
//        visible: false
//      })
//    }

//    classes(theme){
//     return {
//       '@global': {
//         body: {
//           backgroundColor: theme.palette.common.white,
//         },
//       },
//       paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       },
//       avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//       },
//       form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//       },
//       submit: {
//         margin: theme.spacing(3, 0, 2),
//       },
//     }
//   }

//    render(){
//      return(
//        <section>
//          <button onClick={this.onSubmit.bind(this)}>Test</button>
//          <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
//          <div style={{marginTop:"6%"}}>
//           <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={this.classes.paper}>
//         <Avatar className={this.classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           LoginIn
//         </Typography>
//         <form  className={this.classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             onChange={this.handleTextFieldChange}
//             fullWidth
//             value={this.state.textFieldValue}
//             id="email"
//             label="Email"
//             name="emial"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             onChange={this.handlePassFieldChange}
//             value={this.state.textPassValue}
//             name="username"
//             label="Username"
//             type="text"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={this.classes.submit}
//           >
//             Login
//           </Button>
//           <Grid container>
//             <Grid item xs>
//             </Grid>
//             <Grid item>
//               <Link href="/" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>       
//       </Box>
//     </Container>
//         </div>     
//         </Modal>
//        </section>
//      )
//    }

// }

// export default Login;