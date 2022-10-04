import './Add.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data))
        setCurrentUser(data)
        navigate('/')
    };

    return (
        <div className='add-container'>
            <span>Introduce los datos</span>
            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input-form'
                    type="text"
                    placeholder='Latitud'
                    {...register('lat', {
                        required : 'Debe ingresar la coordenada de latitud'
                    }
                  )
                }/>
                <p>{errors.lat?.message}</p>
                <input
                    className='input-form'
                    type="text"
                    placeholder='Longitud'
                    {...register('lon', {
                        required : 'Debe ingresar la coordenada de longitud'
                    }
                  )
                }/>
                <p>{errors.lon?.message}</p>
                <button className='btn-form' type='submit'>Añadir</button>
            </form>
        </div>
    );
};

export default Add