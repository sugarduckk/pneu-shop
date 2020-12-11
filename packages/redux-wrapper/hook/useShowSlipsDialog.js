import React from 'react'
import ImagePlaceholder from 'shared-lib/ui/ImagePlaceholder'
import { useAddDialog } from '../action'

const ShowSlipsDialog = ({ images }) => {
  return <>
    {images.map((image, index) => {
      return <div key={index} style={{ height: '85vh', position: 'relative' }}>
        <ImagePlaceholder src={image.src} alt='slip' fit={true} />
      </div>;
    })}
  </>
}

const useShowSlipsDialog = (images) => {
  const addDialog = useAddDialog()
  return React.useCallback(() => {
    addDialog(<ShowSlipsDialog images={images} />)
  }, [addDialog, images])
}

export default useShowSlipsDialog