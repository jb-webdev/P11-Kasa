import React from 'react'
import { 
  DescriptionSection,
  DropdownMedium, 
  HeaderDropdownMedium, 
  TextHeaderDropdownMedium, 
  BodyDropdownMedium, 
  TextBodyDropdownMedium } from './SectionDescription.elements.js'


export default function SectionDescription(props) {
  //console.log(props.data)

  return (
    <DescriptionSection>

        <DropdownMedium>
          <HeaderDropdownMedium>
            <TextHeaderDropdownMedium>Description</TextHeaderDropdownMedium>
          </HeaderDropdownMedium>
          <BodyDropdownMedium>
            <TextBodyDropdownMedium>{props.description}</TextBodyDropdownMedium>
          </BodyDropdownMedium>
        </DropdownMedium>

        <DropdownMedium>
          <HeaderDropdownMedium>
            <TextHeaderDropdownMedium>Équipements</TextHeaderDropdownMedium>
          </HeaderDropdownMedium>
          <BodyDropdownMedium>
            <TextBodyDropdownMedium>{props.equipments}</TextBodyDropdownMedium>
          </BodyDropdownMedium>
        </DropdownMedium>

    </DescriptionSection>
  )
}
