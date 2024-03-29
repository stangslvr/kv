/* $ID
 *
 * Copyright 2007 by David Becerril <dave.bv [at] gmail [dot] com>
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU General
 * Public License as published by the Free Software Foundation; either version 2 of the License, or (at your
 * option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; if not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 *
 */
 
$(document).ready(
  function() {
    var i = 0 ;
    for(i = 0; i < Drupal.settings.NoBlocks; i++) {
      var css = '#slideshowCS-' + i ; 
      if ($(css).length > 0 ){
      
        var Imagen = eval('Drupal.settings.slideshowcs' + i + '.imagesCS') ;
        var Fading = eval('Drupal.settings.slideshowcs' + i + '.fade') ;

      $(css).crossSlide({
        fade: Fading
        },
        //imagenes
        Imagen
        );
      } 
    }
});
