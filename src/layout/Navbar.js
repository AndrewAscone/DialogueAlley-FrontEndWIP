import React from 'react'
import PostButton from '../components/PostButton'

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             <div class="container-fluid">
                
                <button 
                   class="navbar-toggler" 
                   type="button" 
                   data-bs-toggle="collapse" 
                   data-bs-target="#navbarSupportedContent" 
                   aria-controls="navbarSupportedContent" 
                   aria-expanded="false" 
                   aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                 </button>

                <PostButton/>

                 <a class="navbar-brand" href="#" style={{ marginLeft: '150px'}}>
                    DIALOGUE ALLEY
                 </a>
                 
                
                 <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>

             </div>
        </nav>
    </div>
  )
}
