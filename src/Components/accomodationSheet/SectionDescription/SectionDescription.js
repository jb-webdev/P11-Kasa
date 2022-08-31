import React from 'react'
import { DescriptionSection } from './SectionDescription.elements.js'
import DropdownCompo from '../../DropdownCompo/DropdownCompo.js'

export default function SectionDescription(props) {
  return (
    <DescriptionSection>
        <DropdownCompo  $model='582px' title="Description" description="Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture."/>
        <DropdownCompo $model='582px' title="Équipement" description="Parking, Sèche Cheveux, Machine à laver, Wi-fi, Cuisine équipée, Télévision"/>
        
    </DescriptionSection>
  )
}
