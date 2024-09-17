import * as React from 'react';
import Image from 'next/image';
import stepCreation from '@/public/home/steps/creation.png';

export default async function VideoForm() {
    return (
        <div className='flex flex-col max-w-screen-lg mx-auto p-8 bg-white rounded py-16 max-md:p-5'>
            <div className='mt-5 max-md:max-w-full'>
                <div className='flex gap-6 max-md:flex-col'>
                    {/* Section de l'image et du téléchargement */}
                    <div className='flex flex-col w-1/4 max-md:w-full justify-center'>
                        <div className='flex flex-col justify-center align-center'>
                            <div className='relative overflow-hidden p-2 w-full rounded-md aspect-w-16 aspect-h-9'>
                                <Image src={stepCreation} alt='Step Creation' className='object-cover rounded-md' layout='fill' />
                            </div>
                            <button className='flex items-center gap-2 mt-4 text-sm font-medium text-blue-800'>
                                <Image
                                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/9c5810ae9ac345d05f6037b5c394ff66cbe2e215f29ad226f6ecedf6b89723f8?apiKey=cf7ae97618734ab49ba67fb120a9ab7e&'
                                    alt='Download Icon'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                />
                                <span>Télécharger la vidéo</span>
                            </button>
                        </div>
                    </div>
                    {/* Section du formulaire */}
                    <div className='flex flex-col flex-grow ml-6 max-md:ml-0'>
                        <div className='flex flex-col w-full'>
                            {/* Sujet de la vidéo */}
                            <label className='text-sm font-bold tracking-wide text-blue-950 uppercase mt-5'>Sujet de votre vidéo</label>
                            <div className='flex items-center p-4 mt-2 bg-gray-100 rounded border border-gray-300'>
                                <span className='text-base text-gray-600'>Astuces pour nettoyer une tâche de vin</span>
                            </div>

                            {/* Script */}
                            <label className='text-sm font-bold tracking-wide text-blue-950 uppercase mt-5'>Script</label>
                            <div className='p-4 mt-2 bg-gray-100 rounded border border-gray-300'>
                                <p className='text-base text-gray-600'>
                                    Tu veux enlever une tâche de vin ?<br />
                                    Voici 3 astuces pour régler ce problème.
                                </p>
                                <p className='mt-4 text-base text-gray-600'>1. Du vin blanc :</p>
                                <p className='mt-4 text-base text-gray-600'>
                                    Ajoute du vin blanc à la tâche de vin. Le vin blanc va réagir avec la tâche de vin et va l&apos;enlever. Frotte la
                                    tâche avec un chiffon imbibé de vin blanc et laisse sécher.
                                </p>
                                <p className='mt-4 text-base text-gray-600'>
                                    La tâche de vin va disparaître progressivement. Il ne te restera plus qu&apos;à la laver avec de l&apos;eau et du
                                    savon.
                                </p>
                            </div>

                            {/* Bouton de génération */}
                            <button className='mt-8 px-6 py-3 text-sm font-bold tracking-wider uppercase bg-primary60 text-black-400 rounded'>
                                Générer la vidéo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
