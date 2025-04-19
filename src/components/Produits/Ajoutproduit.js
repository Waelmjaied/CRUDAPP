import React, { Component } from 'react'
import axios from 'axios';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default class Ajoutproduit extends Component {
    constructor(props){
        super(props)
        this.state={
            reference:"",
            designation:"",
            marque:"",
            prixAchat:"",
            prixVente:"",
            qtestock:"",
            caracteristiques:"",
            categorie:"",
            scategorie:"",
            categories:[],
            scategories:[],
            imageartpetitf:"",
            files:"",
            filesm:""

        }
    }

    componentDidMount=async() =>{
        await this.GetCategories();
        await this.GetSCategories();
         }
 
 
    GetCategories = async () => {
             await axios.get("http://localhost:3001/api/categories")
             .then(response => {
             this.setState({ categories: response.data });
               })
             .catch(function (error) {
             console.log(error);
             })
             }

    GetSCategories = async () => {
                await axios.get("http://localhost:3001/api/scategories")
                .then(response => {
                this.setState({ scategories: response.data });
                  })
                .catch(function (error) {
                console.log(error);
                })
                }         

    handleChange=(e)=>{ 
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
    
        }


    handleSubmit = async (event) => {
        
            event.preventDefault();
            
            var ig=[];
    
            this.state.filesm.forEach(element => { 
              
             ig.push("images/"+element.file.name);
            
            });
    
            const objetarticle  = {
                reference: this.state.reference,
                designation :this.state.designation,
                prixAchat :this.state.prixAchat,
                prixVente :this.state.prixVente,
                prixSolde :this.state.prixSolde,
                marque :this.state.marque,
                qtestock :this.state.qtestock,
                caracteristiques:this.state.caracteristiques,
                categorie:this.state.categorie,
                imageartpetitf : "images/"+this.state.files[0].file.name,
                imageartgrandf:ig,
                scategorie :this.state.scategorie
                             }; 
    
               
        
                await axios.post("http://localhost:3001/api/articles",objetarticle).then((res)=>{   
            
                   toast("Article ajouté", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                  
              }).catch(error => {  
                  toast("Erreur Article non ajouté", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
              });  
          }

    render() {
        return (
            <div>
              <>
      
        <ToastContainer />
         <form onSubmit={this.handleSubmit}>
             <h2>Add Article  <button className="btn btn-success">ADD</button> </h2>
             <h4>Données Article</h4>
           <FormControl> 
            <TextField
                name="designation"
                 variant="outlined"
                 label="Désignation"
                 value={this.state.designation}
                 onChange={this.handleChange}
                 required />
             </FormControl>
   
             
             <FormControl> 
             <TextField
             name="reference"
              variant="outlined"
               label="Référence"
               value={this.state.reference}
               onChange={this.handleChange}
               required />
             </FormControl> 
   
               <FormControl>  
             <TextField
             name="prixAchat"
              variant="outlined"
                 label="Prix Achat"
                 type="number"
                  value={this.state.prixAchat}
                 onChange={this.handleChange}
                  /> 
             </FormControl>  
           
             <FormControl>  
             <TextField
             name="prixVente"
              variant="outlined"
                 label="Prix Vente"
                 type="number"
                 value={this.state.prixVente}
                 onChange={this.handleChange}
                  /> 
             </FormControl> 
   
              <FormControl>  
             <TextField
             name="prixSolde"
              variant="outlined"
                 label="Prix Solde"
                 type="number"
                 value={this.state.prixSolde}
                 onChange={this.handleChange}
                  /> 
             </FormControl>   
           
           <FormControl>  
                      
           <TextField
           name="qtestock"
            variant="outlined"
                 label="Quantité Stock"
                 type="number"
                 value={this.state.qtestock}
                 onChange={this.handleChange}
                  /> 
           </FormControl>  
           
           
           <TextField
           name="marque"
           style={{ marginLeft: 8}}
            variant="outlined"
            label="Marque"
            value={this.state.marque}
            onChange={this.handleChange}
                  /> 
         
           
        <div>
           <TextField
           name="caracteristiques"
           fullWidth
           style={{ marginLeft: 8}}
           margin="normal"
            variant="outlined"
            fullWidth
            multiline

            rows={2}
            
          
                 label="Caractéristiques"
                 type="textarea"
                 value={this.state.caracteristiques}
                 onChange={this.handleChange}
                  /> 
            
            </div> 
            


            <FormControl style={{width:350}}>
             <TextField
             name="categorie"
                   select
                   label="Catégorie"
                   variant="outlined"
                   value={this.state.categories}
                   style={{ width: "340"}}
                   style={{ marginLeft: 8}}
                   
                   helperText="Sélectionner une catégorie"
                   onChange={this.handleChange}
                    >
               {
               this.state.categories ?    
               this.state.categories.map(c=>
                    <MenuItem value={c._id}>{c.nomcategorie}
                    
                    </MenuItem>
                    
               )
               :null
               }
             </TextField>
             </FormControl>
             <FormControl style={{width:350}}>
                   <TextField
                   name="scategorie"
                   select
                   label="Sous Catégorie"
                   style={{ marginLeft: 8}}
                   value={this.state.scategorie}
                   variant="outlined"
                   helperText="Sélectionner une sous catégorie"
                 onChange={this.handleChange}
                    >
               {
               this.state.scategories ?    
               this.state.scategories.map(s=>
                    <MenuItem value={s._id}>{s.nomscategorie}</MenuItem>
               )
               :null
               }
             </TextField>
          </FormControl>
          </form>
             <br/>
             <h4>Upload Images</h4>
             <FormControl>   
             <div style={{width:300, height:50}}>
           <FilePond
           name="files"
           files={this.state.files}
           allowMultiple={false}
           onupdatefiles={(f)=>{this.setState({ files : f })}}
           labelIdle='<span class="filepond--label-action">Browse One</span>'
         />
           </div>
          </FormControl>
          <FormControl> 
           <div style={{width:300, height:40}}>
          <FilePond
          name="filesm"
           files={this.state.filesm}
           allowMultiple={true}
           onupdatefiles={(f)=>{this.setState({ filesm : f })}}
           labelIdle='<span class="filepond--label-action">Browse Many</span>'
         />
            </div>
           </FormControl>
        
       </>

            </div>
        )
    }
}
